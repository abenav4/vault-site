---
title: CI/CD DevOps Framework
draft: false
tags:
date: 2022-12-23
---

### [GitHub link 🛠️👨🏿‍🔧](https://github.com/abenav4/Continuous-Integration-DevOps-Pipeline)

This is an end-to-end DevOps testing framework for made using 🐍 Python, 👨🏻 Jenkins, 🐶 DataDog, 🪣 Git, and 🔎 Elastic Search! 😱😱

Includes a separate 🤖Android based infotainment system for a potential test bench. This project is basically a DevOps pipeline for developing applications and lets you run an integration build every time you push a change to your Git repository.

![[datadog.png]]

---

### Installation and build instructions

##### Configuring your GitHub repository

1. Go to your GitHub repository and click on 'Settings'.

2. Click on Webhooks and then click on ‘Add webhook’.

3. In the ‘Payload URL’ field, paste your Jenkins environment URL. At the end of this URL add /github-webhook/. In the ‘Content type’ select: ‘application/json’ and leave the ‘Secret’ field empty.

4. In the page ‘Which events would you like to trigger this webhook?’ choose ‘Let me select individual events.’ Then, check ‘Pull Requests’ and ‘Pushes’. At the end of this option, make sure that the ‘Active’ option is checked and click on ‘Add webhook’.

##### Configuring Jenkins

1. Download Jenkins (Generic Java package (.war)): https://jenkins.io/download/

2. Execute Jenkins as a Java binary (java -jar ./jenkins.war)

3. In Jenkins, click on ‘New Item’ to create a new project.

4. Give your project a name, then choose ‘Pipeline’, name it whatever you'd like and finally, click on ‘OK’.

5. Configure and execute pipline job through any script file in the repository as needed (feel free to test!) by choosing "Pipeline script" as Destination and pasting the contents into Script.

6. Configure to modify the existing job, go to 'Advanced Project Options' and then click 'Pipeline script from SCM'.

7. Click on Git and paste your GitHub repository URL in the ‘Repository URL’ field.

8. Click on the ‘Build Triggers’ tab and then on the ‘GitHub hook trigger for GITScm polling’. Or, choose the trigger of your choice.
