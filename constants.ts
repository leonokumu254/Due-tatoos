import { Language, Translation, Artist, GalleryItem } from './types';

export const TRANSLATIONS: Record<Language, Translation> = {
  [Language.EN]: {
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      artists: 'Artists',
      contact: 'Location',
      book: 'Book Now',
    },
    hero: {
      title: 'Art That Lasts Forever',
      subtitle: 'Premium Custom Tattoo Studio',
      cta: 'Start Your Journey',
    },
    gallery: {
      title: 'Selected Works',
      subtitle: 'A glimpse into our ink mastery',
    },
    artists: {
      title: 'Our Artists',
      subtitle: 'Meet the masters behind the needle',
      artistRole: 'Tattoo Artist',
    },
    contact: {
      title: 'Find Us',
      subtitle: 'Visit our studio',
      address: '123 Ink Street, Creative District, City',
      phone: '+1 (555) 123-4567',
      email: 'info@duetattoos.com',
      mapPlaceholder: 'Map Visualization',
    },
    booking: {
      title: 'Book a Session',
      subtitle: 'Tell us about your idea',
      form: {
        name: 'Full Name',
        phone: 'Phone Number',
        description: 'Describe your tattoo idea',
        date: 'Preferred Date',
        submit: 'Request Booking',
      },
      modal: {
        title: 'Payment Required',
        message: 'To confirm your booking, please send a deposit via Sendwave or TapTap to +1 (555) 123-4567.',
        close: 'Close',
      },
    },
  },
  [Language.FR]: {
    nav: {
      home: 'Accueil',
      gallery: 'Galerie',
      artists: 'Artistes',
      contact: 'Localisation',
      book: 'Réserver',
    },
    hero: {
      title: 'L\'Art Qui Dure Toujours',
      subtitle: 'Studio de Tatouage Personnalisé Premium',
      cta: 'Commencez Votre Voyage',
    },
    gallery: {
      title: 'Œuvres Choisies',
      subtitle: 'Un aperçu de notre maîtrise',
    },
    artists: {
      title: 'Nos Artistes',
      subtitle: 'Rencontrez les maîtres derrière l\'aiguille',
      artistRole: 'Artiste Tatoueur',
    },
    contact: {
      title: 'Nous Trouver',
      subtitle: 'Visitez notre studio',
      address: '123 Rue de l\'Encre, Quartier Créatif, Ville',
      phone: '+1 (555) 123-4567',
      email: 'info@duetattoos.com',
      mapPlaceholder: 'Visualisation de la Carte',
    },
    booking: {
      title: 'Réserver une Séance',
      subtitle: 'Parlez-nous de votre idée',
      form: {
        name: 'Nom Complet',
        phone: 'Numéro de Téléphone',
        description: 'Décrivez votre idée de tatouage',
        date: 'Date Préférée',
        submit: 'Demander une Réservation',
      },
      modal: {
        title: 'Paiement Requis',
        message: 'Pour confirmer votre réservation, veuillez envoyer un acompte via Sendwave ou TapTap au +1 (555) 123-4567.',
        close: 'Fermer',
      },
    },
  },
};

export const ARTISTS: Artist[] = [
  {
    id: 1,
    name: 'Alex "The Needle" Doe',
    role: 'Realism Specialist',
    imageUrl: 'https://picsum.photos/id/338/400/500',
  },
  {
    id: 2,
    name: 'Sarah "Viper" Smith',
    role: 'Neo-Traditional',
    imageUrl: 'https://picsum.photos/id/64/400/500',
  },
  {
    id: 3,
    name: 'Marcus "Ink" Johnson',
    role: 'Blackwork Expert',
    imageUrl: 'https://picsum.photos/id/91/400/500',
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, title: 'Dragon Back Piece', imageUrl: 'https://picsum.photos/id/1015/600/600' },
  { id: 2, title: 'Floral Sleeve', imageUrl: 'https://picsum.photos/id/1016/600/800' },
  { id: 3, title: 'Geometric Chest', imageUrl: 'https://picsum.photos/id/1025/600/600' },
  { id: 4, title: 'Traditional Tiger', imageUrl: 'https://picsum.photos/id/1003/600/800' },
  { id: 5, title: 'Minimalist Line', imageUrl: 'https://picsum.photos/id/1024/600/600' },
  { id: 6, title: 'Portrait', imageUrl: 'https://picsum.photos/id/1062/600/800' },
];
