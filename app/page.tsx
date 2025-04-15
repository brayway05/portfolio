'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import profilePic from '../assets/profile_pic.jpeg';
import backgroundImage from '../assets/forest_background.jpeg';
import pricing_1 from '../assets/project_images/cat_pricing/pricing_1.png';
import pricing_2 from '../assets/project_images/cat_pricing/pricing_2.png';
import roc from '../assets/project_images/cc_fraud/roc.png';
import table from '../assets/project_images/cc_fraud/table.png';
import confusion from '../assets/project_images/cc_fraud/confusion_matrix.png';
import mlPipelineArchitecture from '../assets/project_images/e2e_ml_pipeline/architecture.png';
import AST from '../assets/project_images/lang_detect/AST.png';
import metrics from '../assets/project_images/lang_detect/metrics.png';
import plots from '../assets/project_images/lang_detect/plots.png';
import React from 'react';

interface Project {
  title: string;
  description: string;
  github_url?: string;
  images?: StaticImageData[];
  component?: React.FC;
}

export default function Home() {
  const [resumeUrl, setResumeUrl] = React.useState<string>('');

  React.useEffect(() => {
    const fetchResumeUrl = async () => {
      try {
        // maybe move this url to an environment variable in Amplify that grabs the appropriate S3 bucket
        const response: any = await fetch(
          'https://sl5uzys3otwmkabz3sw5xyvlra0evugg.lambda-url.us-east-1.on.aws/'
        );
        if (response.ok) {
          const body = await response.json();
          setResumeUrl(body.url);
        } else {
          console.error('Failed to fetch resume URL');
        }
      } catch (error) {
        console.error('Error fetching resume URL:', error);
      }
    };

    fetchResumeUrl();
  }, []);

  const projects: Project[] = [
    {
      title: 'End-to-End ML Pipeline',
      description:
        'AWS ML Ops midterm project using AWS Glue, S3, and Sagemaker for the EDA, feature engineering, model training, selection, and deployment, and API Gateway for the public endpoint.',
      images: [mlPipelineArchitecture],
    },
    {
      title: 'Category Pricing Tool @ Pattern',
      description:
        'Data warehouse analysis on US Amazon category price trends. Streamlit app to automate data query, run category pricing algorithm and download data for marketing team analysis and visualization.',
      images: [pricing_1, pricing_2],
    },
    {
      title: 'Credit Card Fraud Detection Model',
      description:
        'Machine Learning group final project using Kaggle dataset to predict credit card fraud. Used SMOTE, PCA, and XGBoost to achieve 99% accuracy.',
      github_url: 'https://github.com/brayway05/fraud-detection',
      images: [roc, confusion, table],
    },
    {
      title: 'Apache Airflow Pipeline Project',
      description:
        'Personal Data Engineering project using Apache Airflow and Spark to take data from the Starlink free API, process their satellite data, and store it in S3',
      github_url: 'https://github.com/brayway05/pipeline_project',
      images: [],
    },
    {
      title: 'Deep Learning Final Project',
      description: 'Language classification using deep learning techniques',
      github_url: 'https://github.com/brayway05/language-classification',
      images: [AST, metrics, plots],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={backgroundImage} alt="Background" fill className="object-cover opacity-20" />
        </div>
        <div className="z-10 px-4 text-center">
          <h1 className="mb-6 text-6xl font-bold">Brayden Christensen</h1>
          <p className="mb-8 text-2xl text-muted-foreground">Software Engineer | Data Scientist</p>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/brayway05" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/brayden-w-christensen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100010743316440"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:brayway05@gmail.com">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">About Me</h2>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image src={profilePic} alt="Profile" fill className="rounded-2xl object-cover" />
          </div>
          <div>
            <p className="mb-6 text-lg text-muted-foreground">
              I am a Computer Science graduate with an emphasis in Machine Learning. I love building
              stuff and having real-world impact. In my free time I love to try new sports, games,
              and music. I snowboard and play the drums. Here are my strongest skills and personal
              projects!
            </p>
            {/* TODO: pull resume url from S3 and create simple script to push resume to S3 */}
            <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button>Download CV</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="transform overflow-hidden transition-transform hover:scale-110"
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images?.map((image, imageIndex) => (
                    <CarouselItem key={imageIndex}>
                      <div
                        className="relative aspect-video cursor-pointer"
                        onClick={() => window.open(image.src, '_blank')}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - Image ${imageIndex + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {project.images && project.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </>
                )}
              </Carousel>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
                <p className="text-lg text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">Work Experience</h2>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-8 text-lg text-muted-foreground"></p>
        </div>
      </section>
    </main>
  );
}
