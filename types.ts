export enum Language {
  EN = 'EN',
  FR = 'FR',
}

export interface NavLinks {
  home: string;
  gallery: string;
  artists: string;
  contact: string;
  book: string;
}

export interface SectionContent {
  title: string;
  subtitle?: string;
}

export interface Translation {
  nav: NavLinks;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  gallery: SectionContent;
  artists: SectionContent & {
    artistRole: string;
  };
  contact: SectionContent & {
    address: string;
    phone: string;
    email: string;
    mapPlaceholder: string;
  };
  booking: SectionContent & {
    form: {
      name: string;
      phone: string;
      description: string;
      date: string;
      submit: string;
    };
    modal: {
      title: string;
      message: string;
      close: string;
    };
  };
}

export interface Artist {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
}
