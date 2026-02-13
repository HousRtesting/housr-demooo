"use client";
import Logo from "../components/Logo";
import React, { useState, useEffect } from 'react';
import { Heart, X, MapPin, Home, DollarSign, Maximize, Bed, Bath, Star, Filter, MessageCircle, ChevronLeft, ChevronRight, Zap, Camera, Upload, Plus, Trash2, RotateCcw, Check, TrendingUp, Key, Building2, User, GraduationCap, Bell, MessageSquare, Send, Sun, Calendar, Wifi, Car, Wind, Info, Clock, CheckCircle, Box, Video } from 'lucide-react';

// Mock real estate data
const generateProperties = () => [
  {
    id: 1,
    type: 'sale',
    address: "Luxury Apartment",
    location: "Brussels, Ixelles",
    region: "Brussels",
    price: 450000,
    rent: null,
    size: 120,
    bedrooms: 3,
    bathrooms: 2,
    kitchen: "Fully equipped",
    epc: "A",
    has3DTour: true,
    tourProvider: "matterport",
    tourUrl: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    ],
    description: "Modern apartment in the heart of Brussels with stunning city views and premium finishes"
  },
  {
    id: 2,
    type: 'sale',
    address: "Family Villa",
    location: "Antwerp, Wilrijk",
    region: "Antwerp",
    price: 680000,
    rent: null,
    size: 200,
    bedrooms: 4,
    bathrooms: 3,
    kitchen: "Modern open kitchen",
    epc: "B",
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
    ],
    description: "Beautiful villa with private garden in quiet neighborhood"
  },
  {
    id: 3,
    type: 'rent',
    address: "Urban Loft",
    location: "Ghent, City Center",
    region: "Ghent",
    price: null,
    rent: 1200,
    size: 85,
    bedrooms: 2,
    bathrooms: 1,
    kitchen: "Industrial style",
    epc: "C",
    has3DTour: true,
    tourProvider: "matterport",
    tourUrl: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800"
    ],
    description: "Industrial loft with high ceilings and exposed brick"
  },
  {
    id: 4,
    type: 'sale',
    address: "Family Home",
    location: "Leuven, Heverlee",
    region: "Leuven",
    price: 520000,
    rent: null,
    size: 180,
    bedrooms: 4,
    bathrooms: 2,
    kitchen: "Renovated kitchen",
    epc: "A",
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800"
    ],
    description: "Spacious family home near schools and parks"
  },
  {
    id: 5,
    type: 'rent',
    address: "Modern Studio",
    location: "Brussels, European Quarter",
    region: "Brussels",
    price: null,
    rent: 950,
    size: 55,
    bedrooms: 1,
    bathrooms: 1,
    kitchen: "Kitchenette",
    epc: "B",
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753229-0316f48c9733?w=800",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
    ],
    description: "Cozy studio perfect for young professionals"
  },
  {
    id: 6,
    type: 'sale',
    address: "Exclusive Penthouse",
    location: "Brussels, Uccle",
    region: "Brussels",
    price: 890000,
    rent: null,
    size: 160,
    bedrooms: 3,
    bathrooms: 3,
    kitchen: "Luxury kitchen",
    epc: "A+",
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800"
    ],
    description: "Penthouse with rooftop terrace and panoramic views"
  },
  {
    id: 7,
    type: 'rent',
    address: "Canal Apartment",
    location: "Bruges, Historic Center",
    region: "Bruges",
    price: null,
    rent: 1100,
    size: 75,
    bedrooms: 2,
    bathrooms: 1,
    kitchen: "Equipped kitchen",
    epc: "C",
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800"
    ],
    description: "Charming apartment with canal views"
  },
  {
    id: 8,
    type: 'sale',
    address: "Classic Townhouse",
    location: "Ghent, Patershol",
    region: "Ghent",
    price: 550000,
    rent: null,
    size: 145,
    bedrooms: 3,
    bathrooms: 2,
    kitchen: "Modern classic",
    epc: "B",
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800"
    ],
    description: "Townhouse with original features in historic district"
  },
  {
    id: 9,
    type: 'student',
    address: "Student Room",
    location: "Leuven, City Center",
    region: "Leuven",
    price: null,
    rent: 450,
    size: 18,
    bedrooms: 1,
    bathrooms: 1,
    kitchen: "Shared kitchen",
    privateBathroom: true,
    privateKitchen: false,
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
    ],
    description: "Cozy student room with private bathroom near university"
  },
  {
    id: 10,
    type: 'student',
    address: "Student Studio",
    location: "Ghent, Sterre Campus",
    region: "Ghent",
    price: null,
    rent: 580,
    size: 25,
    bedrooms: 1,
    bathrooms: 1,
    kitchen: "Private kitchenette",
    privateBathroom: true,
    privateKitchen: true,
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800"
    ],
    description: "Modern student studio with private facilities near campus"
  },
  {
    id: 11,
    type: 'student',
    address: "Budget Student Room",
    location: "Brussels, Etterbeek",
    region: "Brussels",
    price: null,
    rent: 380,
    size: 15,
    bedrooms: 1,
    bathrooms: 1,
    kitchen: "Shared kitchen",
    privateBathroom: false,
    privateKitchen: false,
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800"
    ],
    description: "Affordable student room with shared facilities"
  },
  {
    id: 12,
    type: 'holiday',
    address: "Cozy Apartment in City Center",
    location: "Brussels, Grand Place",
    region: "Brussels",
    pricingModel: 'nightly',
    pricePerNight: 120,
    minStay: 2,
    maxGuests: 4,
    cleaningFee: 50,
    price: null,
    rent: null,
    size: 65,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: 'Apartment',
    rating: 4.8,
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Washing machine'],
    has3DTour: true,
    tourProvider: 'matterport',
    tourUrl: 'https://my.matterport.com/show/?m=SxQL3iGyoDo',
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    ],
    description: "Perfect for tourists! Walk to Grand Place in 5 minutes. Modern, fully equipped apartment."
  },
  {
    id: 13,
    type: 'holiday',
    address: "Beach House Getaway",
    location: "Ostend, Beachfront",
    region: "Bruges",
    pricingModel: 'nightly',
    pricePerNight: 180,
    minStay: 3,
    maxGuests: 6,
    cleaningFee: 75,
    price: null,
    rent: null,
    size: 110,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'House',
    rating: 4.9,
    amenities: ['WiFi', 'Kitchen', 'Parking', 'Washing machine'],
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800"
    ],
    description: "Stunning beachfront house with direct sea access. Perfect for families and groups."
  },
  {
    id: 14,
    type: 'holiday',
    address: "Historic Loft Studio",
    location: "Ghent, Patershol",
    region: "Ghent",
    pricingModel: 'nightly',
    pricePerNight: 95,
    minStay: 1,
    maxGuests: 2,
    cleaningFee: 35,
    price: null,
    rent: null,
    size: 45,
    bedrooms: 1,
    bathrooms: 1,
    propertyType: 'Studio',
    rating: 4.7,
    amenities: ['WiFi', 'Kitchen', 'Air conditioning'],
    has3DTour: false,
    tourProvider: null,
    tourUrl: null,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
    ],
    description: "Charming loft in medieval Ghent. Walk to all major attractions."
  }
];

const App = () => {
  // Fallback image constant
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800";
  const TEST_IMAGE = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800";
  
  // Ensure property has valid images
  const ensureImages = (property) => {
    if (!property.images || property.images.length === 0) {
      return { ...property, images: [FALLBACK_IMAGE, FALLBACK_IMAGE, FALLBACK_IMAGE] };
    }
    return property;
  };
  
  const [userRole, setUserRole] = useState(null); // null, 'buyer', 'tenant', 'seller', 'landlord', 'student', 'holiday_guest'
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [landlordPropertyType, setLandlordPropertyType] = useState(null); // 'student' or 'normal'
  const [properties, setProperties] = useState(generateProperties());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [passedProperties, setPassedProperties] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [contactProperty, setContactProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [superLikeProperty, setSuperLikeProperty] = useState(null);
  const [reservedProperties, setReservedProperties] = useState([]);
  
  // Bidding system states
  const [propertyBids, setPropertyBids] = useState({}); // { propertyId: { amount, userId, timestamp, expiresAt } }
  const [bidAmount, setBidAmount] = useState('');
  const [showBidModal, setShowBidModal] = useState(false);
  
  // Notification states
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Chat states
  const [conversations, setConversations] = useState([]); // Array of conversation objects
  const [showChatOverview, setShowChatOverview] = useState(false);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [unreadMessages, setUnreadMessages] = useState(0);
  
  // Touch/swipe states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Simulate new listings notification (for demo)
  useEffect(() => {
    if (onboardingComplete && (userRole === 'buyer' || userRole === 'tenant' || userRole === 'student' || userRole === 'holiday_guest')) {
      // Simulate a notification after 5 seconds
      const timer = setTimeout(() => {
        const newNotification = {
          id: Date.now(),
          propertyId: userRole === 'student' ? 10 : (userRole === 'buyer' ? 1 : 3),
          message: `New listing available in ${preferences.region === 'All' ? 'your preferred areas' : preferences.region}`,
          timestamp: new Date(),
          read: false
        };
        setNotifications(prev => [newNotification, ...prev]);
        setUnreadNotifications(prev => prev + 1);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [onboardingComplete, userRole]);

  // Check for expired bids
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const updatedBids = { ...propertyBids };
      let hasChanges = false;
      
      Object.keys(updatedBids).forEach(propId => {
        if (updatedBids[propId].expiresAt < now) {
          delete updatedBids[propId];
          hasChanges = true;
        }
      });
      
      if (hasChanges) {
        setPropertyBids(updatedBids);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [propertyBids]);
  
  const [listingStep, setListingStep] = useState(0);
  const [newListing, setNewListing] = useState({
    images: [],
    bedrooms: 1,
    bathrooms: 1,
    kitchen: '',
    size: '',
    price: '',
    rent: '',
    location: '',
    address: '',
    description: '',
    region: 'Brussels',
    epc: 'B',
    privateBathroom: false,
    privateKitchen: false
  });
  
  const [preferences, setPreferences] = useState({
    minPrice: 0,
    maxPrice: 2000000,
    epc: [],
    region: 'All',
    minSize: 0,
    minRent: 0,
    maxRent: 3000,
    // Student preferences
    ownBathroom: 'no_preference', // 'yes', 'no_preference'
    ownKitchen: 'no_preference', // 'yes', 'no_preference'
    studentMinSize: 10,
    // Holiday Guest preferences
    checkIn: null,
    checkOut: null,
    guests: 2,
    accommodationType: 'any', // 'entire_place', 'private_room', 'any'
    minPricePerNight: 0,
    maxPricePerNight: 500,
    // Geo/Location preferences
    locationSearch: '',
    searchRadius: 10, // km
    allowedRegions: [], // Computed based on location search
    useGeoFilter: false,
    geoFilterLabel: ''
  });

  const regions = ['All', 'Brussels', 'Antwerp', 'Ghent', 'Leuven', 'Bruges'];
  const epcRatings = ['A+', 'A', 'B', 'C', 'D', 'E', 'F'];

  // Belgium region mapping for geo filtering
  const regionMapping = {
    'Brussels': {
      municipalities: ['Ixelles', 'Etterbeek', 'Uccle', 'Schaerbeek', 'Anderlecht', 'Molenbeek', 'Saint-Gilles', 'Forest', 'Koekelberg', 'Ganshoren', 'Berchem-Sainte-Agathe', 'Evere', 'Woluwe-Saint-Pierre', 'Woluwe-Saint-Lambert', 'Auderghem', 'Watermael-Boitsfort', 'Jette', 'Laeken', 'Neder-Over-Heembeek'],
      nearby: {
        small: ['Brussels'], // < 5km
        medium: ['Brussels', 'Vilvoorde', 'Zaventem'], // 5-15km
        large: ['Brussels', 'Vilvoorde', 'Zaventem', 'Grimbergen', 'Machelen', 'Diegem'] // 15-50km
      }
    },
    'Antwerp': {
      municipalities: ['Antwerp Center', 'Berchem', 'Deurne', 'Wilrijk', 'Borgerhout', 'Hoboken', 'Merksem', 'Ekeren', 'Berendrecht'],
      nearby: {
        small: ['Antwerp'],
        medium: ['Antwerp', 'Berchem', 'Deurne'],
        large: ['Antwerp', 'Berchem', 'Deurne', 'Wilrijk', 'Mechelen', 'Boom']
      }
    },
    'Ghent': {
      municipalities: ['Ghent Center', 'Patershol', 'Sterre', 'Sint-Pieters', 'Ledeberg', 'Gentbrugge'],
      nearby: {
        small: ['Ghent'],
        medium: ['Ghent', 'Ledeberg'],
        large: ['Ghent', 'Ledeberg', 'Gentbrugge', 'Merelbeke', 'De Pinte']
      }
    },
    'Leuven': {
      municipalities: ['Leuven Center', 'Heverlee', 'Kessel-Lo', 'Wilsele'],
      nearby: {
        small: ['Leuven'],
        medium: ['Leuven', 'Heverlee'],
        large: ['Leuven', 'Heverlee', 'Kessel-Lo', 'Haasrode', 'Oud-Heverlee']
      }
    },
    'Bruges': {
      municipalities: ['Bruges Center', 'Sint-Andries', 'Sint-Michiels', 'Assebroek'],
      nearby: {
        small: ['Bruges'],
        medium: ['Bruges', 'Ostend'],
        large: ['Bruges', 'Ostend', 'Knokke', 'Blankenberge', 'De Haan']
      }
    }
  };

  // Function to get allowed regions based on search location and radius
  const getAllowedRegions = (searchLocation, radiusKm) => {
    const location = searchLocation.trim();
    
    // Find matching region
    for (const [regionName, data] of Object.entries(regionMapping)) {
      if (regionName.toLowerCase().includes(location.toLowerCase()) || 
          location.toLowerCase().includes(regionName.toLowerCase())) {
        
        // Determine radius category
        if (radiusKm <= 5) {
          return data.nearby.small;
        } else if (radiusKm <= 15) {
          return data.nearby.medium;
        } else {
          return data.nearby.large;
        }
      }
      
      // Check municipalities
      if (data.municipalities.some(m => m.toLowerCase().includes(location.toLowerCase()))) {
        return data.nearby.small;
      }
    }
    
    // If no match, return all regions
    return ['All'];
  };

  const filteredProperties = properties.filter(p => {
    // Filter by type based on role
    if (userRole === 'buyer' && p.type !== 'sale') return false;
    if (userRole === 'tenant' && p.type !== 'rent') return false;
    if (userRole === 'student' && p.type !== 'student') return false;
    if (userRole === 'holiday_guest' && p.type !== 'holiday') return false;
    
    // Apply geo filter if enabled
    if (preferences.useGeoFilter && preferences.allowedRegions.length > 0) {
      const matchesGeoRegion = preferences.allowedRegions.includes('All') || 
                               preferences.allowedRegions.includes(p.region) ||
                               preferences.allowedRegions.some(allowed => 
                                 p.location.toLowerCase().includes(allowed.toLowerCase())
                               );
      if (!matchesGeoRegion) return false;
    }
    
    // Apply user preferences
    if (userRole === 'buyer') {
      const matchesPrice = p.price >= preferences.minPrice && p.price <= preferences.maxPrice;
      const matchesEpc = preferences.epc.length === 0 || preferences.epc.includes(p.epc);
      const matchesRegion = preferences.region === 'All' || p.region === preferences.region;
      const matchesSize = p.size >= preferences.minSize;
      const notPassed = !passedProperties.includes(p.id);
      return matchesPrice && matchesEpc && matchesRegion && matchesSize && notPassed;
    }
    
    if (userRole === 'tenant') {
      const matchesRent = p.rent >= preferences.minRent && p.rent <= preferences.maxRent;
      const matchesRegion = preferences.region === 'All' || p.region === preferences.region;
      const notPassed = !passedProperties.includes(p.id);
      return matchesRent && matchesRegion && notPassed;
    }
    
    if (userRole === 'student') {
      const matchesSize = p.size >= preferences.studentMinSize;
      const matchesRegion = preferences.region === 'All' || p.region === preferences.region;
      const matchesBathroom = preferences.ownBathroom === 'no_preference' || (preferences.ownBathroom === 'yes' && p.privateBathroom);
      const matchesKitchen = preferences.ownKitchen === 'no_preference' || (preferences.ownKitchen === 'yes' && p.privateKitchen);
      const notPassed = !passedProperties.includes(p.id);
      return matchesSize && matchesRegion && matchesBathroom && matchesKitchen && notPassed;
    }
    
    if (userRole === 'holiday_guest') {
      const matchesPricePerNight = p.pricePerNight >= preferences.minPricePerNight && p.pricePerNight <= preferences.maxPricePerNight;
      const matchesRegion = preferences.region === 'All' || p.region === preferences.region;
      const matchesGuests = p.maxGuests >= preferences.guests;
      const matchesAccommodation = preferences.accommodationType === 'any' || 
        (preferences.accommodationType === 'entire_place' && (p.propertyType === 'Apartment' || p.propertyType === 'House')) ||
        (preferences.accommodationType === 'private_room' && p.propertyType === 'Room');
      const notPassed = !passedProperties.includes(p.id);
      return matchesPricePerNight && matchesRegion && matchesGuests && matchesAccommodation && notPassed;
    }
    
    return true;
  }).map(ensureImages); // Ensure all properties have valid images

  const currentProperty = filteredProperties[currentIndex] ? ensureImages(filteredProperties[currentIndex]) : null;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentIndex]);

  // Debug: Log current image URL
  useEffect(() => {
    if (currentProperty && currentProperty.images) {
      console.log('Current image URL:', currentProperty.images[currentImageIndex]);
      console.log('All images:', currentProperty.images);
    }
  }, [currentProperty, currentImageIndex]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
    const distance = e.targetTouches[0].clientX - touchStart;
    setDragOffset(distance);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleSwipe(false); // Dislike
    } else if (isRightSwipe) {
      handleSwipe(true); // Like
    }
    
    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse events for desktop dragging
  const onMouseDown = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
    const distance = e.clientX - touchStart;
    setDragOffset(distance);
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleSwipe(false);
    } else if (isRightSwipe) {
      handleSwipe(true);
    }
    
    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      setTouchStart(null);
      setTouchEnd(null);
    }
  };

  const handleSwipe = (liked) => {
    if (!currentProperty) return;
    setSwipeDirection(liked ? 'right' : 'left');
    if (liked) {
      setFavorites([...favorites, currentProperty]);
    } else {
      setPassedProperties([...passedProperties, currentProperty.id]);
    }
    setTimeout(() => {
      setSwipeDirection(null);
      setCurrentIndex((prev) => prev + 1);
    }, 300);
  };

  const handleSuperLike = () => {
    if (!currentProperty) return;
    setSuperLikeProperty(currentProperty);
    setBidAmount('');
    setShowBidModal(true);
  };

  const handlePlaceBid = () => {
    if (!superLikeProperty || !bidAmount || parseFloat(bidAmount) <= 0) {
      alert('Please enter a valid bid amount');
      return;
    }
    
    const amount = parseFloat(bidAmount);
    const currentBid = propertyBids[superLikeProperty.id];
    
    if (currentBid && amount <= currentBid.amount) {
      alert(`Your bid must be higher than the current bid of €${currentBid.amount}`);
      return;
    }
    
    // Place bid
    const newBid = {
      amount: amount,
      userId: 'current-user', // Demo user ID
      timestamp: Date.now(),
      expiresAt: Date.now() + (48 * 60 * 60 * 1000) // 48 hours
    };
    
    setPropertyBids({
      ...propertyBids,
      [superLikeProperty.id]: newBid
    });
    
    setFavorites([...favorites, superLikeProperty]);
    setShowBidModal(false);
    setSuperLikeProperty(null);
    setBidAmount('');
    alert(`Bid placed successfully! Property reserved for 48 hours.`);
    handleSwipe(true);
  };

  const getTimeRemaining = (expiresAt) => {
    const now = Date.now();
    const diff = expiresAt - now;
    
    if (diff <= 0) return 'Expired';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
  };

  const markNotificationsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    setUnreadNotifications(0);
  };

  // Chat functions
  const createOrOpenConversation = (property) => {
    // Check if conversation already exists
    const existingConv = conversations.find(c => c.propertyId === property.id);
    
    if (existingConv) {
      setActiveConversation(existingConv);
      // Mark messages as read
      const updatedConvs = conversations.map(c => {
        if (c.id === existingConv.id) {
          return { ...c, unread: 0, messages: c.messages.map(m => ({ ...m, read: true })) };
        }
        return c;
      });
      setConversations(updatedConvs);
      updateUnreadCount(updatedConvs);
    } else {
      // Create new conversation
      const newConv = {
        id: Date.now(),
        propertyId: property.id,
        property: property,
        otherUser: userRole === 'buyer' || userRole === 'tenant' || userRole === 'student' || userRole === 'holiday_guest' 
          ? { name: 'Property Owner', role: property.type === 'sale' ? 'Seller' : 'Landlord' }
          : { name: 'Interested Buyer', role: 'Buyer' },
        messages: [],
        lastMessage: null,
        lastMessageTime: Date.now(),
        unread: 0
      };
      setConversations([newConv, ...conversations]);
      setActiveConversation(newConv);
    }
    setContactProperty(null);
  };

  const sendMessage = () => {
    if (!messageInput.trim() || !activeConversation) return;
    
    const newMessage = {
      id: Date.now(),
      text: messageInput,
      sender: 'me',
      timestamp: Date.now(),
      read: true
    };
    
    const updatedConv = {
      ...activeConversation,
      messages: [...activeConversation.messages, newMessage],
      lastMessage: messageInput,
      lastMessageTime: Date.now()
    };
    
    // Simulate response after 2 seconds
    setTimeout(() => {
      const responseMsg = {
        id: Date.now() + 1,
        text: getAutoResponse(messageInput),
        sender: 'other',
        timestamp: Date.now(),
        read: false
      };
      
      const convWithResponse = {
        ...updatedConv,
        messages: [...updatedConv.messages, responseMsg],
        lastMessage: responseMsg.text,
        lastMessageTime: Date.now(),
        unread: 1
      };
      
      setConversations(prevConvs => {
        const updated = prevConvs.map(c => c.id === convWithResponse.id ? convWithResponse : c);
        const sorted = updated.sort((a, b) => b.lastMessageTime - a.lastMessageTime);
        updateUnreadCount(sorted);
        return sorted;
      });
      
      if (activeConversation && activeConversation.id === convWithResponse.id) {
        setActiveConversation(convWithResponse);
      }
    }, 2000);
    
    setConversations(prevConvs => {
      const updated = prevConvs.map(c => c.id === updatedConv.id ? updatedConv : c);
      return updated.sort((a, b) => b.lastMessageTime - a.lastMessageTime);
    });
    setActiveConversation(updatedConv);
    setMessageInput('');
  };

  const getAutoResponse = (message) => {
    const responses = [
      "Thanks for your interest! The property is still available. Would you like to schedule a viewing?",
      "Hello! I'd be happy to answer any questions you have about this property.",
      "Great to hear from you! What would you like to know?",
      "The property is in excellent condition. When would you be available for a visit?",
      "Thank you for reaching out. I can provide more details if needed."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const updateUnreadCount = (convs) => {
    const total = convs.reduce((sum, c) => sum + c.unread, 0);
    setUnreadMessages(total);
  };

  const markConversationRead = (convId) => {
    const updatedConvs = conversations.map(c => {
      if (c.id === convId) {
        return { ...c, unread: 0, messages: c.messages.map(m => ({ ...m, read: true })) };
      }
      return c;
    });
    setConversations(updatedConvs);
    updateUnreadCount(updatedConvs);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (currentProperty && currentImageIndex < currentProperty.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setNewListing({...newListing, images: [...newListing.images, ...imageUrls]});
  };

  const removeImage = (index) => {
    setNewListing({...newListing, images: newListing.images.filter((_, i) => i !== index)});
  };

  const completeListing = () => {
    const isStudentHousing = landlordPropertyType === 'student';
    const listing = {
      id: properties.length + 1,
      type: userRole === 'seller' ? 'sale' : (isStudentHousing ? 'student' : 'rent'),
      address: newListing.address,
      location: newListing.location,
      region: newListing.region,
      price: userRole === 'seller' ? parseInt(newListing.price) : null,
      rent: userRole === 'landlord' ? parseInt(newListing.rent) : null,
      size: parseInt(newListing.size),
      bedrooms: newListing.bedrooms,
      bathrooms: newListing.bathrooms,
      kitchen: newListing.kitchen,
      epc: newListing.epc,
      privateBathroom: isStudentHousing ? newListing.privateBathroom : undefined,
      privateKitchen: isStudentHousing ? newListing.privateKitchen : undefined,
      images: newListing.images.length > 0 ? newListing.images : ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"],
      description: newListing.description
    };
    setProperties([...properties, listing]);
    alert('Listing published!');
    setListingStep(0);
    setLandlordPropertyType(null);
    setNewListing({
      images: [], bedrooms: 1, bathrooms: 1, kitchen: '', size: '', price: '', rent: '',
      location: '', address: '', description: '', region: 'Brussels', epc: 'B',
      privateBathroom: false, privateKitchen: false
    });
  };

  // Role Selection Screen
  if (userRole === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-12">
            <Logo className="text-white mx-auto mb-4" size="xlarge" />
            <p className="text-blue-100 text-xl">Swipe your way home.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button onClick={() => setUserRole('buyer')} className="bg-white text-blue-600 rounded-2xl p-8 hover:bg-blue-50 transition-all shadow-xl flex flex-col items-center">
              <TrendingUp size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Buyer</h2>
              <p className="text-gray-600 text-sm">Buy property</p>
            </button>
            
            <button onClick={() => setUserRole('tenant')} className="bg-white text-blue-600 rounded-2xl p-8 hover:bg-blue-50 transition-all shadow-xl flex flex-col items-center">
              <Key size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Tenant</h2>
              <p className="text-gray-600 text-sm">Rent property</p>
            </button>
            
            <button onClick={() => setUserRole('student')} className="bg-white text-blue-600 rounded-2xl p-8 hover:bg-blue-50 transition-all shadow-xl flex flex-col items-center">
              <GraduationCap size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Student</h2>
              <p className="text-gray-600 text-sm">Student housing</p>
            </button>
            
            <button onClick={() => setUserRole('holiday_guest')} className="bg-white text-blue-600 rounded-2xl p-8 hover:bg-blue-50 transition-all shadow-xl flex flex-col items-center">
              <Sun size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Holiday Guest</h2>
              <p className="text-gray-600 text-sm">Short-term stays</p>
            </button>
            
            <button onClick={() => { setUserRole('seller'); setOnboardingComplete(true); }} className="bg-white text-blue-600 rounded-2xl p-8 hover:bg-blue-50 transition-all shadow-xl flex flex-col items-center">
              <Building2 size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Seller</h2>
              <p className="text-gray-600 text-sm">List for sale</p>
            </button>
            
            <button onClick={() => setUserRole('landlord')} className="bg-white text-blue-600 rounded-2xl p-8 hover:bg-blue-50 transition-all shadow-xl flex flex-col items-center">
              <User size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Landlord</h2>
              <p className="text-gray-600 text-sm">List for rent</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Buyer Onboarding
  if (userRole === 'buyer' && !onboardingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2 text-blue-900">Your Preferences</h2>
          <p className="text-gray-600 mb-6">Swipe your way home.</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price: €{preferences.minPrice.toLocaleString()} - €{preferences.maxPrice.toLocaleString()}
              </label>
              <div className="space-y-2">
                <input type="range" min="0" max="2000000" step="50000" value={preferences.minPrice} onChange={(e) => setPreferences({...preferences, minPrice: parseInt(e.target.value)})} className="w-full accent-blue-600" />
                <input type="range" min="0" max="2000000" step="50000" value={preferences.maxPrice} onChange={(e) => setPreferences({...preferences, maxPrice: parseInt(e.target.value)})} className="w-full accent-blue-600" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Energy (EPC)</label>
              <div className="flex flex-wrap gap-2">
                {epcRatings.map(rating => (
                  <button
                    key={rating}
                    onClick={() => {
                      const newEpc = preferences.epc.includes(rating)
                        ? preferences.epc.filter(r => r !== rating)
                        : [...preferences.epc, rating];
                      setPreferences({...preferences, epc: newEpc});
                    }}
                    className={`px-4 py-2 rounded-full font-semibold ${
                      preferences.epc.includes(rating) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {rating}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select value={preferences.region} onChange={(e) => setPreferences({...preferences, region: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                {regions.map(region => <option key={region} value={region}>{region}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Size: {preferences.minSize}m²
              </label>
              <input type="range" min="0" max="500" step="10" value={preferences.minSize} onChange={(e) => setPreferences({...preferences, minSize: parseInt(e.target.value)})} className="w-full accent-blue-600" />
            </div>
          </div>

          <button onClick={() => setOnboardingComplete(true)} className="w-full mt-8 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700">
            Start Browsing
          </button>
        </div>
      </div>
    );
  }

  // Tenant Onboarding
  if (userRole === 'tenant' && !onboardingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2 text-blue-900">Your Preferences</h2>
          <p className="text-gray-600 mb-6">Find your rental</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Rent: €{preferences.minRent} - €{preferences.maxRent}
              </label>
              <div className="space-y-2">
                <input type="range" min="0" max="3000" step="50" value={preferences.minRent} onChange={(e) => setPreferences({...preferences, minRent: parseInt(e.target.value)})} className="w-full accent-blue-600" />
                <input type="range" min="0" max="3000" step="50" value={preferences.maxRent} onChange={(e) => setPreferences({...preferences, maxRent: parseInt(e.target.value)})} className="w-full accent-blue-600" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select value={preferences.region} onChange={(e) => setPreferences({...preferences, region: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                {regions.map(region => <option key={region} value={region}>{region}</option>)}
              </select>
            </div>
          </div>

          <button onClick={() => setOnboardingComplete(true)} className="w-full mt-8 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700">
            Start Browsing
          </button>
        </div>
      </div>
    );
  }

  // Student Onboarding
  if (userRole === 'student' && !onboardingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2 text-blue-900">Your Preferences</h2>
          <p className="text-gray-600 mb-6">Find student housing</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Own bathroom?</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setPreferences({...preferences, ownBathroom: 'yes'})}
                  className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-colors ${
                    preferences.ownBathroom === 'yes' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setPreferences({...preferences, ownBathroom: 'no_preference'})}
                  className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-colors ${
                    preferences.ownBathroom === 'no_preference' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  No preference
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Own kitchen?</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setPreferences({...preferences, ownKitchen: 'yes'})}
                  className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-colors ${
                    preferences.ownKitchen === 'yes' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setPreferences({...preferences, ownKitchen: 'no_preference'})}
                  className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-colors ${
                    preferences.ownKitchen === 'no_preference' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  No preference
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Size: {preferences.studentMinSize}m²
              </label>
              <input 
                type="number" 
                min="10" 
                max="100" 
                value={preferences.studentMinSize} 
                onChange={(e) => setPreferences({...preferences, studentMinSize: parseInt(e.target.value)})} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select value={preferences.region} onChange={(e) => setPreferences({...preferences, region: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                {regions.map(region => <option key={region} value={region}>{region}</option>)}
              </select>
            </div>
          </div>

          <button onClick={() => setOnboardingComplete(true)} className="w-full mt-8 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700">
            Start Browsing
          </button>
        </div>
      </div>
    );
  }

  // Holiday Guest Onboarding
  if (userRole === 'holiday_guest' && !onboardingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="flex items-center gap-3 mb-2">
            <Sun size={32} className="text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-900">Plan Your Stay</h2>
          </div>
          <p className="text-gray-600 mb-6">Find your perfect short-term rental</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select 
                value={preferences.region} 
                onChange={(e) => setPreferences({...preferences, region: e.target.value})} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {regions.map(region => <option key={region} value={region}>{region}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                <input 
                  type="date" 
                  value={preferences.checkIn || ''} 
                  onChange={(e) => setPreferences({...preferences, checkIn: e.target.value})} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                <input 
                  type="date" 
                  value={preferences.checkOut || ''} 
                  onChange={(e) => setPreferences({...preferences, checkOut: e.target.value})} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests: {preferences.guests}
              </label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={preferences.guests} 
                onChange={(e) => setPreferences({...preferences, guests: parseInt(e.target.value)})} 
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>10+</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Accommodation Type</label>
              <div className="space-y-2">
                <button
                  onClick={() => setPreferences({...preferences, accommodationType: 'any'})}
                  className={`w-full px-4 py-3 rounded-lg font-semibold transition-colors text-left ${
                    preferences.accommodationType === 'any' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Any type
                </button>
                <button
                  onClick={() => setPreferences({...preferences, accommodationType: 'entire_place'})}
                  className={`w-full px-4 py-3 rounded-lg font-semibold transition-colors text-left ${
                    preferences.accommodationType === 'entire_place' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Entire place
                </button>
                <button
                  onClick={() => setPreferences({...preferences, accommodationType: 'private_room'})}
                  className={`w-full px-4 py-3 rounded-lg font-semibold transition-colors text-left ${
                    preferences.accommodationType === 'private_room' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Private room
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price per Night: €{preferences.minPricePerNight} - €{preferences.maxPricePerNight}
              </label>
              <div className="space-y-2">
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  step="10" 
                  value={preferences.minPricePerNight} 
                  onChange={(e) => setPreferences({...preferences, minPricePerNight: parseInt(e.target.value)})} 
                  className="w-full accent-blue-600"
                />
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  step="10" 
                  value={preferences.maxPricePerNight} 
                  onChange={(e) => setPreferences({...preferences, maxPricePerNight: parseInt(e.target.value)})} 
                  className="w-full accent-blue-600"
                />
              </div>
            </div>
          </div>

          <button 
            onClick={() => setOnboardingComplete(true)} 
            className="w-full mt-8 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            Start Browsing
          </button>

          <button 
            onClick={() => setUserRole(null)} 
            className="w-full mt-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  // Landlord Property Type Selection
  if (userRole === 'landlord' && !landlordPropertyType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2 text-blue-900">What are you listing?</h2>
          <p className="text-gray-600 mb-6">Choose the type of property</p>
          
          <div className="space-y-4">
            <button
              onClick={() => {
                setLandlordPropertyType('student');
                setOnboardingComplete(true);
              }}
              className="w-full bg-blue-600 text-white rounded-2xl p-6 hover:bg-blue-700 transition-all shadow-lg flex items-center gap-4"
            >
              <GraduationCap size={40} />
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Student Housing</h3>
                <p className="text-blue-100 text-sm">For students looking for accommodation</p>
              </div>
            </button>
            
            <button
              onClick={() => {
                setLandlordPropertyType('normal');
                setOnboardingComplete(true);
              }}
              className="w-full bg-white border-2 border-gray-300 text-gray-800 rounded-2xl p-6 hover:bg-gray-50 transition-all shadow-lg flex items-center gap-4"
            >
              <Home size={40} className="text-blue-600" />
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Normal Housing</h3>
                <p className="text-gray-600 text-sm">For general rental market</p>
              </div>
            </button>

            <button
              onClick={() => {
                setLandlordPropertyType('holiday');
                setOnboardingComplete(true);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg flex items-center gap-4"
            >
              <Sun size={40} />
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Holiday Rental</h3>
                <p className="text-blue-100 text-sm">Short-term / vacation rental</p>
              </div>
            </button>
          </div>

          <button onClick={() => setUserRole(null)} className="w-full mt-6 text-gray-600 hover:text-gray-800 text-sm">
            Back to role selection
          </button>
        </div>
      </div>
    );
  }

  // Seller/Landlord Listing Flow
  if ((userRole === 'seller' || userRole === 'landlord') && onboardingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
            <Logo className="text-blue-600" size="medium" />
            <button onClick={() => setUserRole(null)} className="text-sm text-gray-600 hover:text-gray-800">Switch Role</button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="flex justify-between mb-8">
            {['Photos', 'Price', 'Details', 'Publish'].map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                  idx <= listingStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {idx < listingStep ? <Check size={18} /> : idx + 1}
                </div>
                {idx < 3 && <div className={`w-12 h-1 ${idx < listingStep ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>

          {listingStep === 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Photos</h2>
              <p className="text-gray-600 mb-6">Add at least one</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {newListing.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-video rounded-lg overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                    <button onClick={() => removeImage(idx)} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                {newListing.images.length < 8 && (
                  <label className="aspect-video border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
                    <Camera size={32} className="text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Add</span>
                    <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
                  </label>
                )}
              </div>
              
              <button onClick={() => setListingStep(1)} disabled={newListing.images.length < 1} className={`w-full py-3 rounded-full font-semibold ${
                newListing.images.length < 1 ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Continue
              </button>
            </div>
          )}

          {listingStep === 1 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Price & Location</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {userRole === 'seller' ? 'Sale Price (€)' : 'Monthly Rent (€)'}
                  </label>
                  <input
                    type="number"
                    placeholder={userRole === 'seller' ? '450000' : '1200'}
                    value={userRole === 'seller' ? newListing.price : newListing.rent}
                    onChange={(e) => userRole === 'seller' 
                      ? setNewListing({...newListing, price: e.target.value})
                      : setNewListing({...newListing, rent: e.target.value})
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                  <select value={newListing.region} onChange={(e) => setNewListing({...newListing, region: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {regions.filter(r => r !== 'All').map(region => <option key={region} value={region}>{region}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input type="text" placeholder="Brussels, Ixelles" value={newListing.location} onChange={(e) => setNewListing({...newListing, location: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button onClick={() => setListingStep(0)} className="flex-1 py-3 rounded-full font-semibold bg-gray-200 text-gray-700">Back</button>
                <button
                  onClick={() => setListingStep(2)}
                  disabled={!(userRole === 'seller' ? newListing.price : newListing.rent) || !newListing.location}
                  className={`flex-1 py-3 rounded-full font-semibold ${
                    !(userRole === 'seller' ? newListing.price : newListing.rent) || !newListing.location
                      ? 'bg-gray-200 text-gray-400'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {listingStep === 2 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Details</h2>
              <div className="space-y-6">
                {landlordPropertyType === 'student' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Private bathroom?</label>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setNewListing({...newListing, privateBathroom: true})}
                          className={`flex-1 px-4 py-3 rounded-lg font-semibold ${
                            newListing.privateBathroom ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setNewListing({...newListing, privateBathroom: false})}
                          className={`flex-1 px-4 py-3 rounded-lg font-semibold ${
                            !newListing.privateBathroom ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          No
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Private kitchen?</label>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setNewListing({...newListing, privateKitchen: true})}
                          className={`flex-1 px-4 py-3 rounded-lg font-semibold ${
                            newListing.privateKitchen ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setNewListing({...newListing, privateKitchen: false})}
                          className={`flex-1 px-4 py-3 rounded-lg font-semibold ${
                            !newListing.privateKitchen ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          No
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Square Meters</label>
                      <input type="number" placeholder="18" value={newListing.size} onChange={(e) => setNewListing({...newListing, size: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Name</label>
                      <input type="text" placeholder="Student Room" value={newListing.address} onChange={(e) => setNewListing({...newListing, address: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea placeholder="Describe the student room" value={newListing.description} onChange={(e) => setNewListing({...newListing, description: e.target.value})} rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                        <input type="number" min="1" value={newListing.bedrooms} onChange={(e) => setNewListing({...newListing, bedrooms: parseInt(e.target.value)})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                        <input type="number" min="1" value={newListing.bathrooms} onChange={(e) => setNewListing({...newListing, bathrooms: parseInt(e.target.value)})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Square Meters</label>
                      <input type="number" placeholder="120" value={newListing.size} onChange={(e) => setNewListing({...newListing, size: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Kitchen</label>
                      <input type="text" placeholder="Fully equipped" value={newListing.kitchen} onChange={(e) => setNewListing({...newListing, kitchen: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Name</label>
                      <input type="text" placeholder="Luxury Apartment" value={newListing.address} onChange={(e) => setNewListing({...newListing, address: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea placeholder="Describe your property" value={newListing.description} onChange={(e) => setNewListing({...newListing, description: e.target.value})} rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-4 mt-6">
                <button onClick={() => setListingStep(1)} className="flex-1 py-3 rounded-full font-semibold bg-gray-200 text-gray-700">Back</button>
                <button
                  onClick={() => setListingStep(3)}
                  disabled={!newListing.size || !newListing.address || !newListing.description || (landlordPropertyType !== 'student' && !newListing.kitchen)}
                  className={`flex-1 py-3 rounded-full font-semibold ${
                    !newListing.size || !newListing.address || !newListing.description || (landlordPropertyType !== 'student' && !newListing.kitchen)
                      ? 'bg-gray-200 text-gray-400'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Review
                </button>
              </div>
            </div>
          )}

          {listingStep === 3 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Review</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {newListing.images.slice(0, 4).map((img, idx) => (
                    <img key={idx} src={img} alt="" className="w-full h-32 object-cover rounded-lg" />
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-bold text-xl mb-2">{newListing.address}</h3>
                  <p className="text-gray-600 mb-4">{newListing.location}</p>
                  
                  {landlordPropertyType === 'student' ? (
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Bath size={18} className="text-blue-600" />
                        <span>{newListing.privateBathroom ? 'Private' : 'Shared'} bathroom</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Home size={18} className="text-blue-600" />
                        <span>{newListing.privateKitchen ? 'Private' : 'Shared'} kitchen</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Maximize size={18} className="text-blue-600" />
                        <span>{newListing.size}m²</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Bed size={18} className="text-blue-600" />
                        <span>{newListing.bedrooms} bed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath size={18} className="text-blue-600" />
                        <span>{newListing.bathrooms} bath</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Maximize size={18} className="text-blue-600" />
                        <span>{newListing.size}m²</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Home size={18} className="text-blue-600" />
                        <span>{newListing.kitchen}</span>
                      </div>
                    </div>
                  )}

                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {userRole === 'seller' 
                      ? `€${parseInt(newListing.price).toLocaleString()}`
                      : `€${parseInt(newListing.rent).toLocaleString()}/mo`
                    }
                  </p>
                  <p className="text-gray-700">{newListing.description}</p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button onClick={() => setListingStep(2)} className="flex-1 py-3 rounded-full font-semibold bg-gray-200 text-gray-700">Back</button>
                <button onClick={completeListing} className="flex-1 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700">
                  Publish
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Bidding Modal
  if (showBidModal) {
    const currentBid = superLikeProperty ? propertyBids[superLikeProperty.id] : null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Reserve This Property</h2>
            <p className="text-gray-600">Place your bid for 48-hour exclusive access</p>
          </div>

          {superLikeProperty && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <img src={superLikeProperty.images[0]} alt="" className="w-full h-32 object-cover rounded-lg mb-3" />
              <h3 className="font-bold">{superLikeProperty.address}</h3>
              <p className="text-blue-600 font-bold">
                {superLikeProperty.type === 'sale' 
                  ? `€${superLikeProperty.price.toLocaleString()}`
                  : `€${superLikeProperty.rent}/month`
                }
              </p>
            </div>
          )}

          {currentBid && (
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Current highest bid:</span> €{currentBid.amount}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                You must bid higher to reserve this property
              </p>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {currentBid ? 'Your bid (must be higher)' : 'How much would you like to bid?'}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">€</span>
              <input
                type="number"
                min={currentBid ? currentBid.amount + 1 : 1}
                step="1"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder={currentBid ? `Min: €${currentBid.amount + 1}` : "Enter amount"}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Reservation fee to secure 48-hour exclusive access
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setShowBidModal(false);
                setSuperLikeProperty(null);
                setBidAmount('');
              }}
              className="flex-1 py-3 rounded-full font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handlePlaceBid}
              className="flex-1 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700"
            >
              Place Bid
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Notifications Dropdown
  if (showNotifications) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-start justify-center p-4 z-50 pt-20">
        <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Notifications</h2>
            <button onClick={() => setShowNotifications(false)} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          
          {notifications.length === 0 ? (
            <div className="text-center py-8">
              <Bell size={48} className="mx-auto text-gray-300 mb-3" />
              <p className="text-gray-500">No new notifications</p>
            </div>
          ) : (
            <div className="space-y-3">
              {notifications.map(notif => {
                const property = properties.find(p => p.id === notif.propertyId);
                return (
                  <div 
                    key={notif.id} 
                    className={`p-4 rounded-lg border ${notif.read ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'}`}
                  >
                    <div className="flex gap-3">
                      {property && (
                        <img src={property.images[0]} alt="" className="w-16 h-16 object-cover rounded-lg" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{notif.message}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(notif.timestamp).toLocaleTimeString()}
                        </p>
                        {property && (
                          <button
                            onClick={() => {
                              setShowNotifications(false);
                              const index = filteredProperties.findIndex(p => p.id === property.id);
                              if (index !== -1) setCurrentIndex(index);
                            }}
                            className="text-xs text-blue-600 font-semibold mt-2 hover:underline"
                          >
                            View Property
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Chat Overview Screen
  if (showChatOverview && !activeConversation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
            <Logo className="text-blue-600" size="medium" />
            <button onClick={() => setShowChatOverview(false)} className="text-gray-600 hover:text-gray-800">
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto p-4">
          <h2 className="text-3xl font-bold mb-6">Messages</h2>
          
          {conversations.length === 0 ? (
            <div className="text-center py-20">
              <MessageSquare size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-xl">No conversations yet</p>
              <p className="text-gray-400 text-sm mt-2">Start chatting by contacting a property owner</p>
            </div>
          ) : (
            <div className="space-y-3">
              {conversations.map(conv => (
                <div
                  key={conv.id}
                  onClick={() => {
                    setActiveConversation(conv);
                    markConversationRead(conv.id);
                  }}
                  className={`bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer ${
                    conv.unread > 0 ? 'border-2 border-blue-500' : ''
                  }`}
                >
                  <div className="flex gap-4">
                    <img 
                      src={conv.property.images[0]} 
                      alt="" 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-lg truncate">{conv.property.address}</h3>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                          {new Date(conv.lastMessageTime).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {conv.otherUser.name} • {conv.otherUser.role}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-700 truncate flex-1">
                          {conv.lastMessage || 'Start a conversation...'}
                        </p>
                        {conv.unread > 0 && (
                          <span className="ml-2 bg-blue-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Active Conversation Screen
  if (activeConversation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
        <div className="bg-white shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
            <button 
              onClick={() => {
                setActiveConversation(null);
                setShowChatOverview(true);
              }}
              className="text-gray-600 hover:text-gray-800"
            >
              <ChevronLeft size={24} />
            </button>
            <img 
              src={activeConversation.property.images[0]} 
              alt="" 
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-bold">{activeConversation.property.address}</h3>
              <p className="text-sm text-gray-600">{activeConversation.otherUser.name}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-2xl w-full mx-auto p-4 overflow-y-auto">
          <div className="space-y-4">
            {activeConversation.messages.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Start the conversation by sending a message
              </div>
            ) : (
              activeConversation.messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl ${
                      msg.sender === 'me'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800 shadow-md'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${
                      msg.sender === 'me' ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white border-t max-w-2xl w-full mx-auto p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              disabled={!messageInput.trim()}
              className={`p-3 rounded-full ${
                messageInput.trim()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Favorites
  if (showFavorites) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Logo className="text-blue-600" size="medium" />
            <button onClick={() => setShowFavorites(false)} className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Back
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4">
          <h2 className="text-3xl font-bold mb-6">Favorites</h2>
          {favorites.length === 0 ? (
            <div className="text-center py-20">
              <Heart size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-xl">No favorites yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favorites.map(p => {
                const activeBid = propertyBids[p.id];
                return (
                  <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {activeBid && (
                      <div className="bg-yellow-400 text-center py-2 font-bold flex items-center justify-center gap-2 text-sm">
                        <Zap size={18} />
                        Reserved - €{activeBid.amount} - {getTimeRemaining(activeBid.expiresAt)}
                      </div>
                    )}
                    <img src={p.images[0]} alt="" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold text-xl mb-2">{p.address}</h3>
                      <div className="flex items-center gap-2 mb-3 text-gray-600 text-sm">
                        <MapPin size={16} />
                        <span>{p.location}</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 mb-3">
                        {p.type === 'sale' ? `€${p.price.toLocaleString()}` : `€${p.rent}/mo`}
                      </p>
                      <div className="flex gap-2">
                        <button onClick={() => setContactProperty(p)} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                          <MessageCircle size={18} />Contact
                        </button>
                        <button onClick={() => setFavorites(favorites.filter(f => f.id !== p.id))} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Contact Modal
  if (contactProperty) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Contact {userRole === 'buyer' || userRole === 'tenant' || userRole === 'student' || userRole === 'holiday_guest' ? 'Owner' : 'Interested Party'}</h2>
          <div className="mb-6">
            <img src={contactProperty.images[0]} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="font-bold text-xl">{contactProperty.address}</h3>
            <p className="text-gray-600">{contactProperty.location}</p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => createOrOpenConversation(contactProperty)}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-semibold"
            >
              <MessageSquare size={20} />
              Start Chat
            </button>
            
            <button
              onClick={() => setContactProperty(null)}
              className="w-full px-6 py-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Edit Filters
  if (showFilters) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6">Filters</h2>
          <div className="space-y-6">
            {userRole === 'buyer' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price: €{preferences.minPrice.toLocaleString()} - €{preferences.maxPrice.toLocaleString()}
                  </label>
                  <input type="range" min="0" max="2000000" step="50000" value={preferences.minPrice} onChange={(e) => setPreferences({...preferences, minPrice: parseInt(e.target.value)})} className="w-full accent-blue-600 mb-2" />
                  <input type="range" min="0" max="2000000" step="50000" value={preferences.maxPrice} onChange={(e) => setPreferences({...preferences, maxPrice: parseInt(e.target.value)})} className="w-full accent-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">EPC</label>
                  <div className="flex flex-wrap gap-2">
                    {epcRatings.map(r => (
                      <button key={r} onClick={() => {
                        const newEpc = preferences.epc.includes(r) ? preferences.epc.filter(e => e !== r) : [...preferences.epc, r];
                        setPreferences({...preferences, epc: newEpc});
                      }} className={`px-3 py-1 rounded-full text-sm font-semibold ${preferences.epc.includes(r) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Min Size: {preferences.minSize}m²</label>
                  <input type="range" min="0" max="500" step="10" value={preferences.minSize} onChange={(e) => setPreferences({...preferences, minSize: parseInt(e.target.value)})} className="w-full accent-blue-600" />
                </div>
              </>
            )}
            {userRole === 'tenant' && (
              <div>
                <label className="block text-sm font-medium mb-2">Rent: €{preferences.minRent} - €{preferences.maxRent}</label>
                <input type="range" min="0" max="3000" step="50" value={preferences.minRent} onChange={(e) => setPreferences({...preferences, minRent: parseInt(e.target.value)})} className="w-full accent-blue-600 mb-2" />
                <input type="range" min="0" max="3000" step="50" value={preferences.maxRent} onChange={(e) => setPreferences({...preferences, maxRent: parseInt(e.target.value)})} className="w-full accent-blue-600" />
              </div>
            )}
            
            {/* Location / Geo Search */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-blue-600" />
                Location Search
              </h3>
              
              {preferences.useGeoFilter && preferences.geoFilterLabel && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg flex items-center justify-between">
                  <span className="text-sm text-blue-900">{preferences.geoFilterLabel}</span>
                  <button
                    onClick={() => setPreferences({
                      ...preferences,
                      useGeoFilter: false,
                      allowedRegions: [],
                      geoFilterLabel: '',
                      locationSearch: ''
                    })}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    Clear
                  </button>
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search city / area
                  </label>
                  <input
                    type="text"
                    value={preferences.locationSearch}
                    onChange={(e) => setPreferences({...preferences, locationSearch: e.target.value})}
                    placeholder="e.g., Brussels, Antwerp, Ghent..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Radius: {preferences.searchRadius} km
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={preferences.searchRadius}
                    onChange={(e) => setPreferences({...preferences, searchRadius: parseInt(e.target.value)})}
                    className="w-full accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 km</span>
                    <span>50 km</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    if (preferences.locationSearch.trim()) {
                      const allowedRegions = getAllowedRegions(preferences.locationSearch, preferences.searchRadius);
                      setPreferences({
                        ...preferences,
                        allowedRegions,
                        useGeoFilter: true,
                        geoFilterLabel: `${preferences.searchRadius} km around ${preferences.locationSearch}`
                      });
                    }
                  }}
                  disabled={!preferences.locationSearch.trim()}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                    preferences.locationSearch.trim()
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <MapPin size={18} />
                  Apply Location Filter
                </button>
                
                <div className="text-xs text-gray-500 text-center">
                  💡 Tip: Search by city to find properties in nearby areas
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Region</label>
              <select value={preferences.region} onChange={(e) => setPreferences({...preferences, region: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <button onClick={() => setShowFilters(false)} className="flex-1 py-3 rounded-full bg-gray-200 text-gray-700">Cancel</button>
            <button onClick={() => { setCurrentIndex(0); setShowFilters(false); }} className="flex-1 py-3 rounded-full bg-blue-600 text-white">Apply</button>
          </div>
        </div>
      </div>
    );
  }

  // Main Swipe Interface (for buyers, tenants, students, holiday guests)
  if (onboardingComplete && (userRole === 'buyer' || userRole === 'tenant' || userRole === 'student' || userRole === 'holiday_guest')) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white shadow-sm">
          <div className="max-w-md mx-auto px-4 py-4 flex justify-between items-center">
            <Logo className="text-blue-600" size="medium" />
            <div className="flex gap-2">
              <button 
                onClick={() => setShowChatOverview(true)}
                className="p-2 rounded-full hover:bg-blue-50 relative"
              >
                <MessageSquare size={24} className="text-blue-600" />
                {unreadMessages > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {unreadMessages}
                  </span>
                )}
              </button>
              <button 
                onClick={() => {
                  setShowNotifications(true);
                  markNotificationsRead();
                }} 
                className="p-2 rounded-full hover:bg-blue-50 relative"
              >
                <Bell size={24} className="text-blue-600" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {unreadNotifications}
                  </span>
                )}
              </button>
              <button onClick={() => setShowFilters(true)} className="p-2 rounded-full hover:bg-blue-50">
                <Filter size={24} className="text-blue-600" />
              </button>
              <button onClick={() => setShowFavorites(true)} className="p-2 rounded-full hover:bg-blue-50 relative">
                <Star size={24} className="text-blue-600" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{favorites.length}</span>
                )}
              </button>
              <button onClick={() => setUserRole(null)} className="p-2 rounded-full hover:bg-blue-50">
                <Home size={24} className="text-blue-600" />
              </button>
            </div>
          </div>
        </div>


      {/* Main Swipe Interface - Tinder Style */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <div className="w-full max-w-md" style={{ height: '85vh' }}>
          {currentIndex >= filteredProperties.length ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center py-20 bg-white rounded-3xl shadow-xl px-8">
                <Home size={64} className="mx-auto text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold mb-2">No more properties</h2>
                <p className="text-gray-600 mb-4">You've seen all available properties</p>
                <button 
                  onClick={() => { setCurrentIndex(0); setPassedProperties([]); }} 
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 flex items-center gap-2 mx-auto"
                >
                  <RotateCcw size={20} />Reset & Browse Again
                </button>
              </div>
            </div>
          ) : currentProperty ? (
            <>
              <div 
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `url(${currentProperty.images && currentProperty.images[currentImageIndex] ? currentProperty.images[currentImageIndex] : FALLBACK_IMAGE})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transform: isDragging ? `translateX(${dragOffset}px) rotate(${dragOffset * 0.05}deg)` : 
                            swipeDirection === 'right' ? 'translateX(500px) rotate(20deg)' :
                            swipeDirection === 'left' ? 'translateX(-500px) rotate(-20deg)' : '',
                  opacity: swipeDirection ? 0 : 1,
                  transition: isDragging ? 'none' : 'all 0.3s ease',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
              >

                {/* Swipe Direction Indicators */}
                {isDragging && dragOffset > 50 && (
                  <div className="absolute top-12 right-12 z-20 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-2xl transform rotate-12 shadow-2xl">
                    LIKE
                  </div>
                )}
                {isDragging && dragOffset < -50 && (
                  <div className="absolute top-12 left-12 z-20 bg-red-500 text-white px-8 py-4 rounded-2xl font-bold text-2xl transform -rotate-12 shadow-2xl">
                    NOPE
                  </div>
                )}

                {/* Top Overlay - Bid Indicators & Pagination */}
                <div className="absolute top-0 left-0 right-0 z-10 p-4">
                  {/* Image Pagination Bars */}
                  {currentProperty.images.length > 1 && (
                    <div className="flex gap-2 mb-3">
                      {currentProperty.images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                        >
                          <div 
                            className={`h-full bg-white rounded-full transition-all ${
                              idx === currentImageIndex ? 'w-full' : 'w-0'
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bid Status Badge */}
                  <div className="flex justify-between items-start">
                    {propertyBids[currentProperty.id] ? (
                      <div className="bg-yellow-400/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        <div className="flex items-center gap-2">
                          <Zap size={16} fill="currentColor" />
                          <span>€{propertyBids[currentProperty.id].amount}</span>
                          <span className="text-xs opacity-75">· {getTimeRemaining(propertyBids[currentProperty.id].expiresAt)}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                        <Zap size={16} />
                        <span>Be first to reserve</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Navigation Buttons */}
                {currentProperty.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage} 
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      disabled={currentImageIndex === 0}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-lg z-10 transition-opacity ${
                        currentImageIndex === 0 ? 'opacity-30' : 'opacity-90 hover:opacity-100'
                      }`}
                    >
                      <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button 
                      onClick={nextImage} 
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      disabled={currentImageIndex === currentProperty.images.length - 1}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-lg z-10 transition-opacity ${
                        currentImageIndex === currentProperty.images.length - 1 ? 'opacity-30' : 'opacity-90 hover:opacity-100'
                      }`}
                    >
                      <ChevronRight size={24} className="text-white" />
                    </button>
                  </>
                )}

                {/* Bottom Gradient Overlay */}
                <div 
                  className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
                  style={{
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)'
                  }}
                />

                {/* Property Information - Bottom Left */}
                <div className="absolute bottom-24 left-0 right-0 z-10 px-6">
                  <h2 className="text-3xl font-bold text-white mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                    {currentProperty.address}
                  </h2>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-white/90" />
                    <p className="text-white/90 text-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                      {currentProperty.location}
                    </p>
                  </div>

                  <div className="text-4xl font-bold text-white mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    {currentProperty.type === 'sale' 
                      ? `€${currentProperty.price.toLocaleString()}`
                      : `€${currentProperty.rent}/mo`
                    }
                  </div>

                  {/* Property Details */}
                  {currentProperty.type === 'student' ? (
                    <div className="flex gap-3 flex-wrap">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                        <Bath size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">
                          {currentProperty.privateBathroom ? 'Private' : 'Shared'} Bath
                        </span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                        <Home size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">
                          {currentProperty.privateKitchen ? 'Private' : 'Shared'} Kitchen
                        </span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                        <Maximize size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">{currentProperty.size}m²</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-3 flex-wrap">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                        <Bed size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">{currentProperty.bedrooms} bed</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                        <Bath size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">{currentProperty.bathrooms} bath</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                        <Maximize size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">{currentProperty.size}m²</span>
                      </div>
                      {currentProperty.epc && (
                        <div className="bg-green-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <span className="text-white text-sm font-bold">EPC {currentProperty.epc}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Action Buttons - Bottom Center */}
                <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-6 px-6">
                  <button 
                    onClick={() => handleSwipe(false)} 
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm border-4 border-red-500 flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
                  >
                    <X size={32} className="text-red-500" />
                  </button>
                  
                  <button 
                    onClick={handleSuperLike} 
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 border-4 border-yellow-300 flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
                  >
                    <Zap size={32} className="text-white" fill="white" />
                  </button>
                  
                  <button 
                    onClick={() => handleSwipe(true)} 
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm border-4 border-blue-600 flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
                  >
                    <Heart size={32} className="text-blue-600" />
                  </button>
                </div>
              </div>

              {/* Progress Indicator - Outside Card */}
              <div className="text-center mt-4">
                <p className="text-gray-600 text-sm">
                  {currentIndex + 1} / {filteredProperties.length}
                </p>
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center py-20 bg-white rounded-3xl shadow-xl px-8">
                <Home size={64} className="mx-auto text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold mb-2">No properties found</h2>
                <p className="text-gray-600 mb-4">Try adjusting your filters</p>
                <button 
                  onClick={() => setShowFilters(true)} 
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 flex items-center gap-2 mx-auto"
                >
                  <Filter size={20} />Adjust Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    );
  }

  // Fallback - should never reach here but just in case
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
      <div className="text-center">
        <Logo className="text-blue-600 mx-auto mb-4" size="xlarge" />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default function Page() {
  return <App />;
}