# 🤖 AI Tool Discovery Agent

## Overview

AI Tool Discovery Agent is an automated AI-powered system that discovers new AI tools and updates from RSS feeds, analyzes them using a Large Language Model (Groq LLM), stores structured information in a Notion database, sends Gmail notifications, and displays the collected data through a modern web dashboard.

The project eliminates the need to manually search for new AI tools and provides a centralized platform for discovering, tracking, and organizing AI technologies.

---

## Features

* 🔍 Automated AI tool discovery from RSS feeds
* 🤖 AI-powered content analysis using Groq LLM
* 📂 Automatic categorization of tools
* 📝 AI-generated summaries and use cases
* 🗄️ Notion database integration
* 📧 Automated Gmail notifications
* 🌐 API endpoint using n8n Webhook
* 💻 Interactive frontend dashboard
* 📊 Search and category filtering
* ⏰ Scheduled workflow execution

---

## Project Architecture

```text
RSS Feed Sources
        │
        ▼
    n8n Workflow
        │
        ▼
    Groq LLM
        │
        ▼
Data Processing & Structuring
        │
        ▼
   Notion Database
        │
        ├────────► Gmail Alerts
        │
        ▼
   n8n Webhook API
        │
        ▼
 Frontend Dashboard
```

---

## Tech Stack

### Automation

* n8n

### AI Model

* Groq LLM

### Database

* Notion Database

### Notifications

* Gmail API

### Frontend

* HTML5
* CSS3
* JavaScript

### Version Control

* Git
* GitHub

---

## Workflow Explanation

### Step 1: RSS Feed Collection

The workflow reads AI-related RSS feeds containing the latest AI tools, updates, and announcements.

### Step 2: AI Analysis

Groq LLM analyzes the content and extracts:

* Tool Name
* Category
* Pricing Information
* Use Case
* Rating
* Summary

### Step 3: Data Structuring

The extracted information is converted into a structured format using JavaScript inside n8n.

### Step 4: Data Storage

The processed data is stored inside a Notion database for easy management and tracking.

### Step 5: Email Notification

Whenever a new AI tool is discovered, a formatted Gmail notification is automatically sent.

### Step 6: API Generation

An n8n Webhook exposes the Notion database as a JSON API endpoint.

### Step 7: Frontend Dashboard

The frontend fetches data from the webhook API and displays it in a searchable dashboard.

---

## Screenshots

### Workflow Automation

![Workflow](screenshots/workflow.png)

### Notion Database

![Notion Database](screenshots/notion-database.png)

### Gmail Notification

![Gmail Alert](screenshots/gmail-alert.png)

### Dashboard

![Dashboard](screenshots/dashboard.png)

---

## API Endpoint

The frontend retrieves data using an n8n webhook endpoint:

```text
https://srajan12.app.n8n.cloud/webhook/tools
```

---

## Folder Structure

```text
AI-Tool-Discovery-Agent
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── workflows
│   ├── ai-tool-discovery-workflow.json
│   └── tools-api-workflow.json
│
├── screenshots
│   ├── dashboard.png
│   ├── workflow.png
│   ├── notion-database.png
│   └── gmail-alert.png
│
├── README.md
└── LICENSE
```

---

## Future Improvements

* Duplicate tool detection
* Advanced analytics dashboard
* User authentication
* AI tool comparison engine
* Trend analysis and reporting
* Multi-source AI tool aggregation

---

## Results

The system successfully:

* Automates AI tool discovery
* Categorizes and summarizes tools using AI
* Stores structured data in Notion
* Sends real-time email alerts
* Provides a searchable dashboard interface

---

## Author

**Srajan Shetty**

Built using n8n, Groq LLM, Notion, Gmail, HTML, CSS, and JavaScript.
