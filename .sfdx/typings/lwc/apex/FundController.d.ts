declare module "@salesforce/apex/FundController.getFunds" {
  export default function getFunds(param: {filters: any, pageSize: any, pageNumber: any}): Promise<any>;
}
declare module "@salesforce/apex/FundController.getAssetClasses" {
  export default function getAssetClasses(): Promise<any>;
}
declare module "@salesforce/apex/FundController.getSectors" {
  export default function getSectors(): Promise<any>;
}
declare module "@salesforce/apex/FundController.getInvestmentProfile" {
  export default function getInvestmentProfile(): Promise<any>;
}
declare module "@salesforce/apex/FundController.getCustomerSegment" {
  export default function getCustomerSegment(): Promise<any>;
}
