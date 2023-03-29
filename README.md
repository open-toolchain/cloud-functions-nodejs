# This application repo has been deprecated and is no longer supported. It was the sample application for the Cloud-Function-NodeJS toolchain:
## https://github.com/open-toolchain/cloud-functions-nodejs-toolchain

<p align="center">
    <a href="https://cloud.ibm.com">
        <img src="https://landscape.cncf.io/logos/ibm-cloud-kcsp.svg" height="100" alt="IBM Cloud">
    </a>
</p>


<p align="center">
    <a href="https://cloud.ibm.com">
    <img src="https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg" alt="IBM Cloud">
    </a>
    <img src="https://img.shields.io/badge/platform-node-lightgrey.svg?style=flat" alt="platform">
    <img src="https://img.shields.io/badge/license-Apache2-blue.svg?style=flat" alt="Apache 2">
</p>


# Create a serverless Node.js application

This repository includes code to create a serverless Backend-for-Frontend (BFF) application that uses Node.js and IBM Cloud Functions. Cloud Functions supplies basic Create, Read, Update, and Delete operations in a serverless environment. These functions can be mapped to an API gateway and then integrated into an iOS app; for example, to enable persistence of data into a Cloudant NoSQL Database or another similar NoSQL database. 

This app does not include code to connect to a database, but it includes entry points where database code can be inserted.

## Included components

* [Continuous Delivery](https://cloud.ibm.com/catalog/services/continuous-delivery): Enable tool integrations that support your development, deployment, and operation tasks.
* [GitLab](https://about.gitlab.com/): GitLab unifies issues, code review, CI, and CD into a single UI.

## Featured technologies

* [IBM Cloud Functions](https://cloud.ibm.com/functions): An event-action platform that allows you to run code in response to an event.
* [Node](https://nodejs.org/en/): An open-source JavaScript runtime environment for running server-side JavaScript code.

## Steps

While you can use the individual actions locally, this collection of endpoints is meant to be deployed to IBM Cloud Functions. You can [deploy this application to IBM Cloud](#deploying-to-ibm-cloud) or [deploy it manually](#deploying-manually) by cloning this repo first.  

You can then review the [Actions](https://cloud.ibm.com/functions/actions) in the IBM Cloud console, along with your [Cloud Functions APIs](https://cloud.ibm.com/functions/apimanagement).
<table>
  <thead>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create</td>
      <td>POST /database</td>
      <td>Inserts an object</td>
    </tr>
    <tr>
      <td>Read</td>
      <td>GET /database/<font color="#ec407a">objectId</font></td>
      <td>Retrieves an object</td>
    </tr>
    <tr>
      <td>ReadAll</td>
      <td>GET /database</td>
      <td>Retrieves all objects</td>
    </tr>
    <tr>
      <td>Delete </td>
      <td>DELETE /database/<font color="#ec407a">objectId</font></td>
      <td>Deletes an object</td>
    </tr>
    <tr>
      <td>DeleteAll</td>
      <td>DELETE /database</td>
      <td>Deletes all objects</td>
    </tr>
    <tr>
      <td>Update</td>
      <td>PUT /database/<font color="#ec407a">objectId</font></td>
      <td>Updates content of an object</td>
    </tr>
  </tbody>
</table>

### Deploying to IBM Cloud

<p align="center">
    <a href="https://cloud.ibm.com/devops/setup/deploy?repository=https%3A%2F%2Fgithub.com%2Fopen-toolchain%2Fcloud-functions-nodejs-toolchain">
    <img src="https://cloud.ibm.com/devops/graphics/create_toolchain_button.png" alt="Create toolchain">
    </a>
</p>

Click **Create toolchain** to deploy this same application to IBM Cloud. This option creates a deployment pipeline, complete with a hosted GitLab project and DevOps toolchain. [IBM Cloud DevOps](https://www.ibm.com/cloud/devops) services provides toolchains as a set of tool integrations that support development and deployment to IBM Cloud Functions. 

### Deploying manually 

To deploy this application to IBM Cloud using the command line, you can leverage the IBM Cloud Developer Tools.

* Install [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) on your machine by running the following command:
  ```
  curl -sL https://ibm.biz/idt-installer | bash
  ```

## Next steps
* Learn more about augmenting your Node.js applications on IBM Cloud with the [Node.js Programming Guide](https://cloud.ibm.com/docs/node?topic=nodejs-getting-started).
* Explore other [sample applications](https://cloud.ibm.com/developer/appservice/starter-kits) on IBM Cloud.

## License

[Apache 2.0](LICENSE)
