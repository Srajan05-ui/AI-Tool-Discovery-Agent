const express = require("express");
const cors = require("cors");
const { Client } = require("@notionhq/client");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

app.get("/", (req, res) => {
  res.send("AI Tool Discovery API Running 🚀");
});

app.get("/tools", async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
    });

    const tools = response.results.map((page) => ({
      id: page.id,

      tool_name:
        page.properties["Tool Name"]?.title?.[0]?.plain_text || "",

      website:
        page.properties["Website"]?.url || "",

      category:
        page.properties["Category"]?.select?.name || "",

      pricing:
        page.properties["Pricing"]?.select?.name || "",

      use_case:
        page.properties["Use Case"]?.rich_text?.[0]?.plain_text || "",

      rating:
        page.properties["Rating"]?.number || 0,

      summary:
        page.properties["Summary"]?.rich_text?.[0]?.plain_text || "",

      source:
        page.properties["Source"]?.rich_text?.[0]?.plain_text || "",

      date_added:
        page.properties["Date Added"]?.date?.start || "",
    }));

    res.json(tools);
  } catch (error) {
    console.error("Notion Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});