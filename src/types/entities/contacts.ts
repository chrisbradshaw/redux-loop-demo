export type ContactsModality = "daily" | "biweekly" | "monthly";

export interface ContactsLine {
  id: string;
  productName: string;
  productLine: string;
  manufacturer: string;
  images: {
    front: string;
    side?: string;
    angle?: string;
    swatch?: string;
  };
  count: number;
  isTrial: boolean;
  price: number;
  modality: ContactsModality;
  available: boolean;
  waterContent: number;
  material: string;
  oxygenPermeability: number;
  description: string;
  features: {
    adds: string[];
    colors: string[];
    spheres: string[];
    cylinders: string[];
    diameters: string[];
    axises: string[];
    baseCurves: string[];
    stockTypes: string[];
    membership: string;
  };
}
