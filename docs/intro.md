---
sidebar_label: 'Overview'
sidebar_position: 1
slug: /
---
# Overview

Curiefense is an **API-first, DevOps oriented web-defense HTTP-Filter** **adapter for** [**Envoy**](https://www.envoyproxy.io/). It provides multiple security technologies \(WAF, application-layer DDoS protection, bot management, and more\) along with real-time traffic monitoring and transparency.

Curiefense is [fully controllable programmatically](#). All  configuration data \(security rulesets, policies, etc.\) can be maintained singularly, or as different branches for different environments, as you choose. All changes are versioned, and reverts can be done at any time.

Curiefense also has a UI console, discussed in the [Console](#) section. 

## Version

This documentation is for **version 1.0.0**

\(To view docs for a different version, choose it at the top of the left sidebar.\)

## Architecture and Components

Curiefense provides traffic filtering that can be configured differently for multiple environments \(e.g. dev/qa/prod\), all of which can be administered from one central cluster if desired. Here is an overview of its components.

![Components of Curiefense](https://docs.curiefense.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MBKYrzcgjxY2is3C1ff%2F-MLETEcKXMwKWumNPRte%2F-MLP6mMVAEJLjG5Nbg3i%2FCuriefense-operation.png?alt=media&token=827c2a74-6d7d-4eaa-b18f-4af751f53491)

In the diagram above, the **Server** represents a resource protected by Curiefense \(a site, app, service, or API\). The **User** is a traffic source attempting to access that resource. 

Incoming traffic passes through Envoy, which is using Curiefense as an HTTP filter. Hostile requests are blocked.

The other components in the diagram represent the Curiefense platform, as follows:

* **Curiefense proxy** \(represented by the Curiefense logo\): Plugs into Envoy and performs traffic filtering. 
* **Logs DB**. Curiefense stores traffic data \(headers, payloads, etc.\) from all requests here.
* **Metrics**. A Prometheus store of traffic metrics.
* **Dashboard**. Grafana dashboard\(s\) with visual displays of traffic metrics.
* **Web UI**. Curiefense's web console for configuring the platform.
* **Config Server:** A service which:
  * Receives configuration edits from the **Web UI**
  * Receives configuration edits from API calls \(not shown in the diagram\)
  * Creates a new configuration version in response to edits
  * Stores the new version in one or more **Cloud Storage** buckets
* **Cloud Storage**: Stores versioned configurations. Each **Curiefense proxy** periodically checks **Cloud Storage**: when a new version is found there, the proxy downloads it and updates its security posture.

For detailed information about the specific containers and services which perform the roles described above, see the reference page on [Services and Container Images](#).

## Deployment Options

Curiefense can run in variety of environments, depending on your specific needs. It can be adapted to many different use cases. 

Deployment instructions for several different environments are available in the [Installation](installation/deployment-first-steps/) section of this manual and on the [Getting Started](#) page. More will be added in the future.

If you create an installation workflow for a situation that is not currently described in this manual, please feel free to submit it for inclusion.

## Three Primary Roles

Conceptually, there are three primary roles performed by Curiefense:

* **Configuration** \(allowing admins to define security policies, assign them to URLs, etc.\)
* **Filtering** \(applying the defined Configurations to incoming traffic and blocking hostile requests\)
* **Monitoring** \(displaying traffic data in real-time and in historical logs\).

## Configuration

### Data Structures

Curiefense maintains its security parameters as Entries, which are contained in Documents, which are contained in Configurations.

A Configuration is a complete definition of Curiefense's behavior for a specific environment. An organization can maintain multiple Configurations \(e.g., development, staging, and production\).

![](https://docs.curiefense.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MBKYrzcgjxY2is3C1ff%2F-MLZpyDq24nVmDNCoXB-%2F-ML_QK-2I5_A94dqFyTM%2FData%20structures.png?alt=media&token=5c582806-f3f9-4032-8cd5-149cdc3e6f34)

Each Configuration contains six Documents \(one of each type: ACL Profiles, Rate Limits, etc.\) Each Document contains at least one Entry, i.e., an individual security rule or definition. Documents are edited and managed in the [Document Editor](#) or via API.

A Configuration also includes data blobs, which currently are used to store the Maxmind geolocation database. This is where Curiefense obtains its geolocation data and ASN for each request it processes.

### Configuration Administration

A Configuration is the atomic unit for all of Curiefense's parameters. Any edits to a Configuration result in a new Configuration being committed. Configurations are versioned, and can be reverted at any time.

When a Configuration is created or modified \(whether by the UI console or an API call\), the admin pushes it to a Cloud Storage bucket. An important feature of Curiefense is simultaneous publishing to multiple environments. 

![](https://docs.curiefense.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MBKYrzcgjxY2is3C1ff%2F-MC63dVF_4ZiAR1kojIi%2F-MC64-QHuJ8y_ovHgYwa%2FArchitecture%20-%20Multiple%20buckets.png?alt=media&token=34d6ec58-4cb8-4285-a873-ea848b23b8e1)

When a Configuration is [published](#), it can be pushed to multiple buckets \(each of which can be monitored by one or more environments\) all at once, from a single button-push or API call.

## Filtering

Traffic filtering is performed by the Curiefense proxy, as shown in the first diagram above. In other words, this is where the security policies defined in the Configurations are enforced.

Some activities \(such as rate limiting\) require local data storage. Internally, Curiefense uses Redis for this. Other storage methods can be used instead if desired.

## Monitoring

Each time a request goes through Curiefense, a detailed log message is pushed to the Logs DB. \(Out of the box, Curiefense is setup to work with PostgreSQL, but any RDBMS can be used.\)

Traffic data is available in several ways:

* The Curiefense graphical client provides an [Access Log](#) which provides comprehensive details for requests.
* Curiefense is also integrated with [Grafana](https://github.com/grafana/grafana) and [Prometheus](https://github.com/prometheus/prometheus), for traffic dashboards and other displays.
