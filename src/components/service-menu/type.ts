interface ServiceEmployee {
  subTitle: string;
  price: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  serviceEmployee: ServiceEmployee[];
  img: string;
}
