export const k8sKinds = {
  Service: {
    // singular label
    label: 'Service',
    // api path to resource
    path: 'services',
    //Used in resource-list.jsx to return the matching object
    plural: 'services',
    abbr: 'S',
    namespaced: true,
  },
  Pod: {
    label: 'Pod',
    path: 'pods',
    plural: 'pods',
    abbr: 'P',
    namespaced: true,
  },
  Container: {
    label: 'Container',
    path: 'containers',
    plural: 'containers',
    abbr: 'C',
  },
  DaemonSet: {
    label: 'Daemon Set',
    path: 'daemonsets',
    plural: 'daemonsets',
    isExtension: true,
    apiVersion: 'v1beta1',
    abbr: 'DS',
    namespaced: true,
    propagationPolicy: 'Foreground',
  },
  ReplicationController: {
    label: 'Replication Controller',
    path: 'replicationcontrollers',
    plural: 'replicationcontrollers',
    abbr: 'RC',
    namespaced: true,
    propagationPolicy: 'Foreground',
  },
  HorizontalPodAutoscaler: {
    label: 'Horizontal Pod Autoscaler',
    path: 'horizontalpodautoscalers',
    plural: 'horizontalpodautoscalers',
    apiVersion: 'autoscaling/v1',
    basePath: '/apis/',
    abbr: 'HPA',
  },
  ServiceAccount: {
    label: 'Service Account',
    path: 'serviceaccounts',
    plural: 'serviceaccounts',
    abbr: 'SA',
    namespaced: true,
  },
  ReplicaSet: {
    label: 'Replica Set',
    isExtension: true,
    apiVersion: 'v1beta1',
    path: 'replicasets',
    plural: 'replicasets',
    abbr: 'RS',
    namespaced: true,
    propagationPolicy : 'Foreground',
  },
  Deployment: {
    label: 'Deployment',
    isExtension: true,
    apiVersion: 'v1beta1',
    path: 'deployments',
    plural: 'deployments',
    abbr: 'D',
    namespaced: true,
    propagationPolicy: 'Foreground'
  },
  Job: {
    label: 'Job',
    apiVersion: 'batch/v1',
    path: 'jobs',
    basePath: '/apis/',
    plural: 'jobs',
    abbr: 'J',
    namespaced: true,
    propagationPolicy: 'Foreground',
  },
  Node: {
    label: 'Node',
    path: 'nodes',
    plural: 'nodes',
    abbr: 'N',
  },
  Event: {
    label: 'Event',
    path: 'events',
    plural: 'events',
    abbr: 'E',
    namespaced: true,
  },
  ComponentStatus: {
    label: 'Component Status',
    labelPlural: 'Component Statuses',
    path: 'componentstatuses',
    plural: 'componentstatuses',
    abbr: 'CS',
  },
  Namespace: {
    label: 'Namespace',
    path: 'namespaces',
    plural: 'namespaces',
    abbr: 'N',
  },
  Ingress: {
    label: 'Ingress',
    labelPlural: 'Ingresses',
    isExtension: true,
    apiVersion: 'v1beta1',
    path: 'ingresses',
    plural: 'ingresses',
    abbr: 'I',
    namespaced: true,
  },
  ConfigMap: {
    label: 'Config Map',
    path: 'configmaps',
    plural: 'configmaps',
    abbr: 'CM',
    namespaced: true,
  },
  Secret: {
    label: 'Secret',
    path: 'secrets',
    plural: 'secrets',
    abbr: 'S',
    namespaced: true,
  },
  ClusterRoleBinding: {
    label: 'Cluster Role Binding',
    basePath: '/apis/rbac.authorization.k8s.io/',
    apiVersion: 'v1beta1',
    path: 'clusterrolebindings',
    plural: 'clusterrolebindings',
    abbr: 'CRB',
  },
  ClusterRole: {
    label: 'Cluster Role',
    basePath: '/apis/rbac.authorization.k8s.io/',
    apiVersion: 'v1beta1',
    path: 'clusterroles',
    plural: 'clusterroles',
    abbr: 'CR'
  },
  RoleBinding: {
    label: 'Role Binding',
    basePath: '/apis/rbac.authorization.k8s.io/',
    apiVersion: 'v1beta1',
    path: 'rolebindings',
    plural: 'rolebindings',
    abbr: 'RB',
    namespaced: true,
  },
  Role: {
    label: 'Role',
    basePath: '/apis/rbac.authorization.k8s.io/',
    apiVersion: 'v1beta1',
    path: 'roles',
    plural: 'roles',
    abbr: 'R',
    namespaced: true,
  },
  TectonicVersion: {
    label: 'Tectonic Version',
    basePath: '/apis/tco.coreos.com/',
    apiVersion: 'v1',
    path: 'tectonicversions',
    plural: 'tectonicversions',
    abbr: 'TV',
    namespaced: true,
  },
  ChannelOperatorConfig: {
    label: 'Channel Operator Config',
    basePath: '/apis/tco.coreos.com/',
    apiVersion: 'v1',
    path: 'channeloperatorconfigs',
    plural: 'channeloperatorconfigs',
    abbr: 'COC',
    namespaced: true,
  },
  AppVersion: {
    label: 'AppVersion',
    basePath: '/apis/tco.coreos.com/',
    apiVersion: 'v1',
    path: 'appversions',
    plural: 'appversions',
    abbr: 'AV',
    namespaced: true,
  },
  PersistentVolume: {
    label: 'Persistent Volume',
    apiVersion: 'v1',
    path: 'persistentvolumes',
    plural: 'persistentvolumes',
    abbr: 'PV',
  },
  PersistentVolumeClaim: {
    label: 'Persistent Volume Claim',
    apiVersion: 'v1',
    path: 'persistentvolumeclaims',
    plural: 'persistentvolumeclaims',
    abbr: 'PVC',
    namespaced: true,
  },
  Petset: {
    label: 'Petset',
    plural: 'petsets',
    abbr: 'PS',
    propagationPolicy: 'Foreground',
  },
  StatefulSet: {
    label: 'Stateful Set',
    basePath: '/apis/',
    apiVersion: 'apps/v1beta1',
    path: 'statefulsets',
    plural: 'statefulsets',
    abbr: 'SS',
    namespaced: true,
    propagationPolicy: 'Foreground',
  },
  ResourceQuota: {
    label: 'Resource Quota',
    apiVersion: 'v1',
    path: 'resourcequotas',
    plural: 'resourcequotas',
    abbr: 'RQ',
    namespaced: true,
  },
  EtcdCluster: {
    label: 'etcd Cluster',
    apiVersion: 'v1beta2',
    basePath: '/apis/etcd.database.coreos.com/',
    path: 'etcdclusters',
    plural: 'etcdclusters',
    labelPlural: 'Etcd Clusters',
    abbr: 'EC',
    namespaced: true,
  },
  NetworkPolicy: {
    label: 'Network Policy',
    labelPlural: 'Network Policies',
    apiVersion: 'v1',
    basePath: '/apis/networking.k8s.io/',
    path: 'networkpolicies',
    plural: 'networkpolicies',
    abbr: 'NP',
    namespaced: true,
  },
  Prometheus: {
    label: 'Prometheus',
    labelPlural: 'Prometheuses',
    apiVersion: 'v1',
    basePath: '/apis/monitoring.coreos.com/',
    path: 'prometheuses',
    plural: 'prometheuses',
    abbr: 'PI',
    namespaced: true,
  },
  ServiceMonitor: {
    label: 'Service Monitor',
    labelPlural: 'Service Monitors',
    apiVersion: 'v1',
    basePath: '/apis/monitoring.coreos.com/',
    path: 'servicemonitors',
    plural: 'servicemonitors',
    abbr: 'SM',
    namespaced: true,
  },
  Alertmanager: {
    namespaced: true,
    label: 'Alertmanager',
    labelPlural: 'Alertmanagers',
    apiVersion: 'v1',
    basePath: '/apis/monitoring.coreos.com/',
    path: 'alertmanagers',
    plural: 'alertmanagers',
    abbr: 'AM',
  },
  'PodVuln': {
    label: 'Pod Vuln',
    labelPlural: 'Pod Vulns',
    path: 'podvulns',
    plural: 'podvulns',
    abbr: 'V',
    namespaced: true,
  },
  '*': {
    id: 'all',
    plural: 'all',
    labelPlural: 'All',
    abbr: '*',
  },
  CustomResourceDefinition: {
    label: 'Custom Resource Definition',
    basePath: '/apis/apiextensions.k8s.io/',
    apiVersion: 'v1beta1',
    path: 'customresourcedefinitions',
    abbr: 'CRD',
    namespaced: false,
    plural: 'customresourcedefinitions',
  },
  'AlphaCatalogEntry-v1': {
    label: 'AlphaCatalogEntry-v1',
    basePath: '/apis/app.coreos.com/',
    apiVersion: 'v1alpha1',
    path: 'alphacatalogentry-v1s',
    abbr: 'CE',
    namespaced: true,
    plural: 'alphacatalogentry-v1s',
  },
  'ClusterServiceVersion-v1': {
    label: 'ClusterServiceVersion-v1',
    basePath: '/apis/app.coreos.com/',
    apiVersion: 'v1alpha1',
    path: 'clusterserviceversion-v1s',
    abbr: 'CSV',
    namespaced: true,
    plural: 'clusterserviceversion-v1s',
  },
};

_.each(k8sKinds, (v, k) => {
  v.kind = v.kind || k;
  v.id = v.id || k.toLowerCase();
  v.labelPlural = v.labelPlural || `${v.label}s`;
});
