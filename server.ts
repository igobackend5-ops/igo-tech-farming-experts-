import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Gemini Chatbot Support
  app.post("/api/chatbot", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }

      // Check for Gemini API Key
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        // Return a mock fallback response with an indication that it's a simulated response
        return res.json({
          text: `Hello, and welcome to Tech Farming Expert support! I am currently running in **Demo Mode**. Here is an automated precision farming recommendation for your query:

### 🌾 Agronomic Assessment
For **"${message}"**, we advise:
1. **Irrigation Optimization**: Maintain a soil moisture ratio between **35% and 42%** for young crops.
2. **Fertigation Balance**: Ensure your Nitrogen-Phosphorus-Potassium (N:P:K) ratios are adjusted based on satellite leaf nitrogen indices.
3. **Pest Control Monitoring**: Use computer vision imagery to scan foliage weekly for signs of *Spodoptera* or early blight.

*To activate live, real-time Gemini AI agronomy advice, please configure a valid \`GEMINI_API_KEY\` in your Secrets settings.*`,
          isDemo: true
        });
      }

      // Initialize Gemini Client
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const systemInstruction = `You are the chief agronomy AI assistant for "Tech Farming Expert" (by IGO Group of Companies, founded by Dr. John Yesudhas).
Your target audience of agriculture professionals, Indian farmers, FPOs (Farmer Producer Organizations), and enterprise agritech clients.
Provide precise, professional, actionable, and state-of-the-art advice on:
- Crop health management and organic/chemical pest & disease control.
- Weather-guided smart irrigation, soil moisture management, and N-P-K nutrient balancing.
- Satellite NDVI remote sensing interpretation, yield projection, and micro-climate analytics.
- Indian agricultural market pricing, export benchmarks, cold storage planning, and FPO logistics.
Keep your answers professional and elegant, using markdown formatting (lists, bolding, simple tables). Do NOT generate HTML tags or speak with low-effort fluff. Keep your tone encouraging, premium, and highly authoritative. All computations are done in Metric/Indian standards (Acres, Quintals, Rupees ₹).`;

      // Build contents array featuring conversation history if present
      const contentsList: any[] = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contentsList.push({
            role: turn.role === "user" ? "user" : "model",
            parts: [{ text: turn.text }]
          });
        }
      }
      contentsList.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contentsList,
        config: {
          systemInstruction: systemInstruction,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API error:", error);
      res.status(500).json({ error: error.message || "Failed to process chat query." });
    }
  });

  // Vite middleware for development or serving compiled files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
