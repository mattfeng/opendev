# Research Ops

## Notes
* DevOps concepts
    * Infrastructure as Code
* DevOps guidelines
    * Make developers production-aware and vice-versa.
    * Have developers and operators adopt the same toolset.
    * Shorten release cycles so release impact is manageable.
    * Promote tools to automate the setup of environments.
    * Continuous pipeline of testing and delivery.
* Why does DevOps benefit research?
    * Collaborators can run the latest version (and also know that a latest version is always available; not in some broken transition phase).
    * Enables continual development of theory and code.
    * This is valuable when the goal is _not_ obvious, and hypotheses are made as the code is used.

### Experience of applying DevOps to research
* Challenges in infrastructure setup
    * Much of scientific code is legacy and has few maintainers.
    * Software stack should not need to be installed by researchers.
    * Cluster creation is difficult.
* Open questions in infrastructure setup
    * How to use infrastructure as code?
    * How to enable heterogeneous computing?
    * How to enable personal clusters (freedom to install software, free of political issues)?
* Challenges in testing scientific software for continuous integration
    * Integration tests are hard; unit tests are possible.
    * Some tests are not feasible (would require a human judgment, e.g. with NLP).
    * _Open question: testing with robust statistical analysis?_
* Challenges in the deployment of scientific software as a service
    * **MPI code in the cloud is difficult to deploy**; it expects a fixed number of nodes, so it cannot take advantage of elasticity of the cloud.
    * Lack of module and package managers for scientific computing codes; restricts the use of PaaS.

## References

[^1]: _ResearchOps: the case for DevOps in scientific applications._ ([http](https://ieeexplore.ieee.org/document/7140503))
