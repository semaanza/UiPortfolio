import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Create the contact in storage
      const contact = await storage.createContact(contactData);
      
      // Return success response
      return res.status(201).json({
        message: "Contact form submission received",
        contact: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      return res.status(500).json({ 
        message: "Failed to process contact form submission", 
        error: (error as Error).message 
      });
    }
  });

  // GET all contacts (admin only in a real app)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      return res.status(200).json({ contacts });
    } catch (error) {
      return res.status(500).json({ 
        message: "Failed to fetch contacts", 
        error: (error as Error).message 
      });
    }
  });

  // GET a specific contact by ID (admin only in a real app)
  app.get("/api/contacts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid contact ID" });
      }
      
      const contact = await storage.getContactById(id);
      if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
      }
      
      return res.status(200).json({ contact });
    } catch (error) {
      return res.status(500).json({ 
        message: "Failed to fetch contact", 
        error: (error as Error).message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
