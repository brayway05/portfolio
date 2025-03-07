import { useState } from "react";

import LinkIcon from "@mui/icons-material/Link";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import profilePic from "../assets/profile_pic.jpeg";
import pricing_1 from "../assets/project_images/cat_pricing/pricing_1.png";
import pricing_2 from "../assets/project_images/cat_pricing/pricing_2.png";
import confusion from "../assets/project_images/cc_fraud/confusion_matrix.png";
import roc from "../assets/project_images/cc_fraud/roc.png";
import table from "../assets/project_images/cc_fraud/table.png";
import AST from "../assets/project_images/lang_detect/AST.png";
import metrics from "../assets/project_images/lang_detect/metrics.png";
import plots from "../assets/project_images/lang_detect/plots.png";
import query1 from "../assets/project_images/nlp_queries/query1.png";
import query2 from "../assets/project_images/nlp_queries/query2.png";
import mlPipelineArchitecture from "../assets/project_images/e2e_ml_pipeline/architecture.png";
import DemoComponent from "./demo.tsx";
import S3FileViewer from "./pipeline-s3-viewer.tsx";
import Profile from "./profile.tsx";

interface Photo {
  src: string;
  caption: string;
}

interface Project {
  title: string;
  github?: string;
  summary: string;
  photos?: Photo[];
  component?: React.FC;
}

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const deep_learning_final: Project = {
    title: "Deep Learning Final Project",
    summary:
      "Language recognition models built from pre-trained ResNet18 and implemented my own Audio Spectrogram Transformer to compare results. I learned a lot about audio processing and the different architectures that exist for audio classification and speech recongnition. Ask me about the different models I used and how I implemented the Audio Spectrogram Transformer! Also check out the github for my training code and report pdf.",
    github: "https://github.com/brayway05/language-classification",
    photos: [
      {
        src: AST,
        caption: "Audio Spectrogram Transformer",
      },
      {
        src: metrics,
        caption: "Overall Metrics",
      },
      {
        src: plots,
        caption: "ResNet18 results",
      },
    ],
  };

  const category_pricing: Project = {
    title: "Category Pricing Tool @ Pattern",
    summary:
      "Data warehouse analysis on US Amazon category price trends. Streamlit app to automate data query, run category pricing algorithm and download data for marketing team analysis and visualization. Ask me about how the algorithm works and what kind of data I used!",
    photos: [
      {
        src: pricing_1,
        caption: "Streamlit App Dashboard",
      },
      {
        src: pricing_2,
        caption: "Graph of Category Price Over Time",
      },
    ],
  };

  const fraud_detection: Project = {
    title: "Credit Card Fraud Detection Model",
    summary:
      "Machine Learning group final project using Kaggle dataset to predict credit card fraud. Used SMOTE, PCA, and XGBoost to achieve 99% accuracy. Ask me about the data processing and model types!",
    github: "https://github.com/brayway05/fraud-detection",
    photos: [
      {
        src: roc,
        caption: "ROC Curve for Isolation Forest",
      },
      {
        src: confusion,
        caption: "Confusion Matrix",
      },
      {
        src: table,
        caption: "Model Metrics",
      },
    ],
  };

  const nlp_queries: Project = {
    title: "Natural Language Processing SQL",
    summary:
      "Database systems class project using OpenAPI and SQL to query data using natural language as input",
    github: "https://github.com/brayway05/Natural_Language_AI",
    photos: [
      {
        src: query1,
        caption: "Query Example 1",
      },
      {
        src: query2,
        caption: "Query Example 2",
      },
    ],
  };

  const pipeline_project: Project = {
    title: "Apache Airflow Pipeline Project",
    summary:
      "Personal Data Engineering project using Apache Airflow and Spark to take data from the Starlink free API, process their satellite data, and display it here on my website. I am storing the data as a compressed JSON file in an S3 bucket and using a Lambda function to generate a presigned URL to view the data. Check out the github for the Airflow code.",
    github: "https://github.com/brayway05/pipeline_project",
    component: S3FileViewer,
  };

  const e2e_ml_pipeline: Project = {
    title: "End-to-End ML Pipeline",
    summary:
      "AWS ML Ops midterm project using AWS Glue for the ETL process, " +
      "Sagemaker for the EDA, feature engineering, model training, selection, and deployment, and API Gateway for the public endpoint. " +
      "Compared three different models for predicting customer churn and went with a Random Forest Classifier.",
    photos: [
      {
        src: mlPipelineArchitecture,
        caption: "ML Pipeline Architecture",
      },
    ],
  };

  const projects: Project[] = [
    e2e_ml_pipeline,
    pipeline_project,
    fraud_detection,
    category_pricing,
    deep_learning_final,
    nlp_queries,
  ];

  const experience = [
    {
      title: "Software Engineer (Full-time)",
      company: "Bricks and Minfigs (BAM)",
      link: "https://bricksandminifigs.com/",
      duration: "Jan 2025 - Present",
      description:
        "At BAM, I work on our central franchise management system. This system is used across almost 200 stores in the US and Canada and is responsible for managing inventory, sales, and customer data. " +
        "I have created automated buys and sales reports for store managers and the corporate team. " +
        "I continue to work on this system and other internal tools to help our stores run more efficiently and effectively. " +
        "Our team being so small, I also take responsibility for our CI/CD pipeline and our plans to create a data warehousing pipeline to better store and generate reports and analytics .",
      projects: [
        "Migrated entire system from Create-React-App to Vite",
        "Automated Trello Agile workflow with Github Actions",
      ],
    },
    {
      title: "Data Science Intern (Part-time)",
      company: "Pattern",
      link: "https://pattern.com/",
      duration: "Dec 2023 - Dec 2024",
      description:
        "At Pattern, I developed automated tools using Streamlit and SQL for data and consumer trend analysis for the marketing team. I developed machine learning models like simple Neural Networks, Multi-polynomial Linear Regression, XGboost Trees, Clustering Algorithms and more for exploratory data analysis, visualization and modeling. " +
        "With these tools, the PR team was able to increase SEO through press articles about Amazon consumer behavior and relevant pop-culture trends. Specifically our digital PR program netted 140 high-quality backlinks to Pattern.com in 2024. " +
        'During my time at Pattern, Pattern was in the news 3 times per day on average. Pattern is also now the top organic search term for "ecommerce accelerator" ' +
        "Finally, stories about Pattern came from 547 publications in 46 states in the U.S. and 9 countries around the world.",
      projects: [
        "Customer segmentation clustering analysis for sales team",
        "Streamlit app for category pricing tool",
        "Automated data ingestion and processing pipeline from Amazon product API's into Snowflake to calculate lost revenue from brand competitors on Amazon. Automated query through Streamlit interface",
        "EDA and statistical modeling for Amazon category insights",
      ],
    },
    {
      title: "Full Stack Developer (Part-time)",
      company: "Church of Jesus Christ of Latter-day Saints",
      link: "https://www.churchofjesuschrist.org/?lang=eng",
      duration: "Mar 2023 - Jan 2025",
      description:
        "Built and maintained in-house web/mobile applications in a small dev team. When I started our stack was " +
        "Oracle, Angular, Nest and Node but in January 2024 we switched to React, Express, Tailwind CSS and Node with Vite. " +
        "I was given the responsibility of Lead Developer in March 2024 and have been leading development on a new mobile/web application since then." +
        "I learned a lot working very closely with a QA team and a project manager to ensure that our applications are bug free and meet the needs of our users. " +
        "My final project was working on an AI-powered chatbot that allows missionaries to practice communicating with people and teaching in different languages both over text and voice.",
      projects: [
        "Bug fixing for legacy applications",
        "Built from scratch and shipped new mobile/web application using React, Express, Vite, Tailwind CSS, and CapacitorJS",
        "Lead developer on mobile/web AI chatbot",
        "AI chatbot with React and AWS hosted Websockets on top of OpenAI GPT-4o and Whisper for audio input and output",
        "Automated testing with Cypress",
        "AWS Lambda functions for serverless architecture",
        "AWS Redis for auth caching",
        "Terraform for AWS cloud architecture",
        "Azure DevOps for CI/CD",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#192031] via-indigo-800 to-blue-800">
      <div className="container mx-auto py-2">
        <Profile
          profilePicture={profilePic}
          name={"Brayden Christensen"}
          intro={
            "I am a senior studying Computer Science with an emphasis in Machine Learning. " +
            "Check out my Hugging Face profile to see the models I have fine-tuned and played around with. " +
            "In my free time I love to try new sports, games, and music. I snowboard and play the drums. Here are my strongest skills and personal projects!"
          }
        />
      </div>
      <div className="container mx-auto py-8">
        <Tabs
          value={activeTab}
          onChange={(_, value) => setActiveTab(value)}
          className="flex justify-center mb-8"
        >
          <Tab
            label="Projects"
            value="projects"
            sx={{
              color: "#777",
              "&.Mui-selected": {
                color: "#fff",
              },
            }}
          />
          <Tab
            label="Experience"
            value="experience"
            sx={{
              color: "#777",
              "&.Mui-selected": {
                color: "#fff",
              },
            }}
          />
        </Tabs>
        {activeTab === "projects" ? (
          <div>
            {projects.map((project, index) => (
              <div key={index} className="container mx-auto py-8">
                <DemoComponent
                  title={project.title}
                  github={project.github}
                  summary={project.summary}
                  photos={project?.photos}
                  Component={project?.component}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-white">
            {experience.map((exp, index) => (
              <div key={index} className="container mx-auto py-8 px-8">
                <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
                <p className="text-blue-400 mb-2">
                  <LinkIcon />
                  <b>
                    <a href={exp.link}>{exp.company}</a>
                  </b>{" "}
                  - {exp.duration}
                </p>
                <p className="text-gray-400">{exp.description}</p>
                <div className="mt-4">
                  <h3 className="font-bold">Projects/Responsibilites:</h3>
                  {exp.projects.map((project, index) => (
                    <ul
                      key={index}
                      className="text-gray-400 list-disc list-inside text-sm my-1 ml-3"
                    >
                      <li>{project}</li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
