# Federation Experiment

This README documents the usage of an experimental tool for creating federated Tectonic clusters. 

## Dependencies
The `federate` tool depends on the following utilities:
* jq
* kubectl

## Getting Started
To begin, create a number of Tectonic clusters using the installer and copy their respective kubeconfig files to a known directory.
These kubeconfigs must use client certificate authentication.
*Note* the `federate` tool will not work with kubeconfigs generated by the Tectonic Console.
*Note*: the name given to the kubeconfig will be the cluster's name in the federation.
```sh
cd contrib/federation-experiment
mkdir kubeconfigs
cp /path/to/first/kubeconfig kubeconfigs/cluster1
cp /path/to/second/kubeconfig kubeconfigs/cluster2
```

Identify the cluster you would like to use as the host cluster for the federation control plane by setting `FEDERATE_HOST` to be the filename of the cluster's corresponding kubeconfig.
*Note*: if you leave this unset, the `federate` tool will use the first cluster alphabetically.
```sh
export FEDERATE_HOST=cluster1
```

Identify the name and ID of the AWS hosted zone you would like to use for service federation.
*Note*: the zone name must end with a trailing `.`.
```sh
export DNS_ZONE_NAME=tectonic.dev.coreos.systems.
export DNS_ZONE_ID=Z38L6YZDN7JBF7
```

Run the `federate` command with the path to the directory of kubeconfigs as the first argument:
```sh
./federate kubeconfigs
```

If the `federate` tool exited cleanly, the hosted control plane will now be deployed to `$FEDERATE_HOST`; congratulations!

## Verify
Confirm that `federate` created a `clusters` directory in the working directory and that it contains a manifest for each of the Tectonic clusters in the federation.

The `federate` tool will have merged all of the kubeconfigs into one kubeconfig located in the current directory. It will also have created two additional contexts for managing the federation, `federation` and `host`. Switch to the `federation` context and verify that the clusters are ready:
```sh
kubectl config use-context federation --kubeconfig=kubeconfig
kubectl get clusters -w --kubeconfig=kubeconfig
```

Once `kubectl` reports all clusters as `Ready` you can begin to deploy workloads to the federation.

## Integration With Console
This federation cluster management is enabled by default in the Tectonic Console in Tectonic versions >= 1.6.4-tectonic.1. Alternatively you can use this Console image: `quay.io/coreos/tectonic-console:multi-cluster-dev`.
To configure the Tectonic Console and take advantage of this feature, follow these steps:

1. Create a Kubernetes federation using the `federate` tool.
2. Ensure that the Tectonic clusters in your federation are running a recent tag of the Tectonic Console image, e.g. `multi-cluster-dev`. If they are not, update necessary deployments and specify this image tag in the `PodSpec` section.
3. In your browser, navigate to the Tectonic Console for each of the clusters in the federation and open the developer tools.
4. In the developer tools console, type the following to create two local storage entries:
    ```js
    localStorage.setItem('federation-apiserver-token', '<the token printed by the federate tool>');
    localStorage.setItem('federation-apiserver-url', '<the url printed by the federate tool>');
    ```
5. Refresh the Tectonic Console and verify that a cluster selection UI is now available under the Tectonic logo. *Note*: local storage settings will persist across refreshes and browser restarts but are tied to a specific Chrome user. This will not work across multiple incognito mode sessions.