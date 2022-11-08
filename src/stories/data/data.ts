import Greyhound from './../assets/images/logos/greyhound.png';

// @ts-nocheck
const amenities = [
  {
    name: 'Wi-Fi',
    icon: 'wifi',
    isHighlighted: false,
  },
  {
    name: 'Bathroom',
    icon: 'bathroom',
    isHighlighted: false,
  },
  {
    name: 'E-Ticket',
    icon: 'eticket',
    isHighlighted: true,
  },
  {
    name: 'Refund',
    icon: 'refund',
    isHighlighted: true,
  },
  {
    name: 'Seat XL',
    icon: 'seatXl',
    isHighlighted: false,
  },
  {
    name: 'Utensils',
    icon: 'utensils',
    isHighlighted: false,
  },
]

const vehicleTypes = [
  {
    name: 'Bus',
    icon: 'bus'
  }
]

export const departureCardData = {
  operator: {
    name: 'Greyhound',
    logo: Greyhound,
  },
  vehicle: {
    type: vehicleTypes[0],
    amenities: [amenities[0], amenities[1], amenities[2]],
  },
  travelDuration: '4h 30m',
  passengerNumber: 2,
  routeSegmentOrigin: {
    date: {
      time: '8:00am',
      day: 'Wed, Jul 28',
    },
    location: {
      place: 'Port Authority',
      city: 'New York City',
      mapLink: '#',
    }
  },
  routeSegmentDestination: {
    date: {
      time: '12:30pm',
      day: 'Fri, Jul 30',
    },
    location: {
      place: 'Union Station',
      city: 'Washington',
      mapLink: '#',
    },
  },
  isFastest: false,
  fareOptions: [
    {
      type: 'Regular',
      price: '$45',
      amenities: [],
    },
  ],
}

export const departureCardFastestData = {
  operator: {
    name: 'Greyhound',
    logo: Greyhound,
  },
  vehicle: {
    type: vehicleTypes[0],
    amenities: [amenities[0], amenities[1], amenities[2]],
  },
  travelDuration: '4h 30m',
  passengerNumber: 2,
  routeSegmentOrigin: {
    date: {
      time: '8:00am',
      day: 'Wed, Jul 28',
    },
    location: {
      place: 'Port Authority',
      city: 'New York City',
      mapLink: '#',
    }
  },
  routeSegmentDestination: {
    date: {
      time: '12:30pm',
      day: 'Fri, Jul 30',
    },
    location: {
      place: 'Union Station',
      city: 'Washington',
      mapLink: '#',
    },
  },
  isFastest: true,
  fareOptions: [
    {
      type: 'Regular',
      price: '$45',
      amenities: [],
    },
  ],
}

export const departureCardSeveralFaresData = {
  operator: {
    name: 'Greyhound',
    logo: Greyhound,
  },
  vehicle: {
    type: vehicleTypes[0],
    amenities: [amenities[0], amenities[1], amenities[2]],
  },
  travelDuration: '4h 30m',
  passengerNumber: 2,
  routeSegmentOrigin: {
    date: {
      time: '8:00am',
      day: 'Wed, Jul 28',
    },
    location: {
      place: 'Port Authority',
      city: 'New York City',
      mapLink: '#',
    }
  },
  routeSegmentDestination: {
    date: {
      time: '12:30pm',
      day: 'Fri, Jul 30',
    },
    location: {
      place: 'Union Station',
      city: 'Washington',
      mapLink: '#',
    },
  },
  isFastest: false,
  fareOptions: [
    {
      type: 'Regular',
      price: '$45',
      amenities: [],
    },
    {
      type: 'First-class',
      price: '$95',
      amenities: [amenities[3], amenities[4], amenities[5]],
    },
  ],
}