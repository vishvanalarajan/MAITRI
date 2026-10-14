# 🚀 MAITRI — AI Assistant for Astronaut Well-Being

**An intelligent digital companion designed to support the psychological and physical well-being of astronauts during long-duration space missions.**

MAITRI stands for **Mental Assistance through AI for Resilience, Tracking, and Intelligent Support**. The project aims to help astronauts manage stress, fatigue, isolation, and other challenges associated with living and working in space.

The current prototype provides a space-themed mission dashboard, a conversational assistant interface, and a crew wellness alert system. It is designed as a foundation for integrating AI-powered wellness support, sensor data, and intelligent health monitoring.

## 📌 Problem Statement

Astronauts on long-duration space missions face psychological and physical challenges, including isolation, stress, disrupted sleep cycles, fatigue, and limited access to immediate medical assistance.

Communication delays between spacecraft and Earth can make timely psychological support difficult. Continuous monitoring and personalized wellness assistance can help identify concerning patterns and support astronaut well-being.

MAITRI proposes an AI-powered platform that brings wellness tracking, conversational support, and alert management together in a single interface.

## 🎯 Objectives

- Provide accessible psychological wellness support for astronauts.
- Monitor and visualize crew wellness indicators.
- Help identify potential patterns of stress and fatigue.
- Provide a conversational interface for wellness-related interactions.
- Display alerts associated with crew wellness.
- Establish a foundation for future AI and wearable sensor integration.
- Support safer and more sustainable long-duration space missions.

## ✨ Features

### 1. Mission Dashboard
- Displays crew wellness scores.
- Shows stress levels, sleep duration, and heart rate variability (HRV) indicators.
- Presents crew wellness summaries.
- Visualizes stress trends.
- Displays recent wellness alerts.

### 2. AI Companion Interface
- Provides a chat-style interface for wellness conversations.
- Supports suggested prompts related to mood, isolation, and sleep.
- Displays user messages and assistant responses.
- Provides a foundation for future integration with a real AI language model.

### 3. Wellness Alert Dashboard
- Organizes alerts by severity: critical, warning, and informational.
- Displays alert descriptions and associated crew members.
- Provides an interface for future alert acknowledgement and intervention workflows.

### 4. Space-Themed User Interface
- Dark, mission-control-inspired visual design.
- Reusable UI components.
- Icon-based navigation.
- Structured dashboard cards and data visualizations.

> **Current implementation note:** The crew records, wellness values, alerts, and assistant responses are demonstration data or prototype interactions. Live biometric monitoring, real AI inference, and persistent database storage are not yet implemented in this version.

## 🖥️ Application Pages

| Page | Route | Description |
|---|---|---|
| Mission Deck | `/` | Crew wellness overview, metrics, trends, and recent alerts |
| Companion | `/companion` | Conversational wellness assistant interface |
| Alerts | `/alerts` | Crew wellness alerts and alert management interface |

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend user interface |
| TypeScript | Type-safe application development |
| TanStack Start | Application framework |
| TanStack Router | Page routing |
| Tailwind CSS 4 | Styling and responsive layouts |
| Radix UI | Accessible UI primitives |
| Lucide React | Icons |
| Recharts | Data visualization library |
| Vite | Development server and build tooling |

## 🏗️ System Architecture

The current prototype is primarily a frontend application.

```text
                MAITRI APPLICATION
                        |
                        v
              React + TypeScript UI
                        |
          +-------------+-------------+
          |             |             |
          v             v             v
     Mission Deck    Companion      Alerts
          |             |             |
          +-------------+-------------+
                        |
                        v
             Demonstration Data
                        |
                        v
                Dashboard Views

        FUTURE INTEGRATION
                        |
          +-------------+-------------+
          |             |             |
          v             v             v
       AI Model      Database     Sensor APIs
          |             |             |
          +-------------+-------------+
                        |
                        v
             Wellness Analysis
                        |
                        v
          Authorized Alert Management
```

## ⚙️ Getting Started

### Prerequisites

Install the following:

- Node.js (a version compatible with the project's dependencies)
- npm
- Git
- Visual Studio Code or another code editor

### Installation

**1. Clone the repository**

Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPOSITORY` with your repository name.

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

**2. Navigate to the project folder**

```bash
cd YOUR-REPOSITORY
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

### Additional Commands

Build the application:

```bash
npm run build
```

Run the linter:

```bash
npm run lint
```

Preview a production build:

```bash
npm run preview
```

## 🔮 Future Enhancements

- **AI-powered wellness companion:** Integrate a real language model for context-aware wellness conversations.
- **Mood and stress check-ins:** Collect and store user-reported wellness information.
- **Wearable integration:** Connect supported devices for heart rate, sleep, and activity data.
- **Wellness trend analysis:** Analyze recorded data to identify changes over time.
- **Voice interaction:** Add speech-to-text and text-to-speech functionality.
- **Offline support:** Provide selected wellness features without continuous internet connectivity.
- **Database integration:** Store wellness history and alerts securely.
- **Role-based access:** Provide appropriate access for astronauts, medical personnel, and mission control.
- **Notification system:** Introduce validated alert workflows for concerning wellness patterns.

## 🔐 Privacy and Safety

MAITRI is intended to complement, not replace, qualified healthcare professionals. Wellness indicators should not be treated as medical diagnoses.

Future implementations should use secure authentication, access controls, encryption, informed consent, and appropriate human review for critical alerts. Any AI-generated recommendations must be evaluated for reliability and suitability before operational use.

## 🌍 Potential Applications

Although designed around astronaut wellness, the underlying concept may also be explored in other isolated or high-stress environments, including:

- Remote research stations.
- Submarine crews.
- Defence and emergency-response teams.
- Long-duration expedition teams.
- Other settings where access to immediate psychological support is limited.

These are potential future applications, not currently validated deployments.

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork this repository.
2. Create a feature branch.
3. Implement and test your changes.
4. Commit your changes with a clear message.
5. Open a pull request describing the improvement.

## 📄 License

A license has not yet been specified. Add a `LICENSE` file after selecting the license under which you want to distribute this project.

## 👥 Project Details

- **Project Name:** MAITRI
- **Domain:** Artificial Intelligence and Space Technology
- **Project Type:** Web application prototype
- **Primary Focus:** Astronaut psychological and physical wellness
- **Intended Users:** Astronauts and authorized wellness or mission-support personnel
- **Development Status:** Frontend prototype with demonstration data

---

### MAITRI 🚀

**Supporting the people who explore the universe.**
