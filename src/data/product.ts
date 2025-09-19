// @ts-nocheck

import mainframe from '../assets/Images/mainframe.png'

export const productsData = {
   "marine-board": {
    name: "Marine Boards",
    products: [
      {
        id: "marine-001",
        name: "Marine Board Premium",
        image: mainframe,   // ✅ use imported image, not string
        shortDesc: "High durability marine board",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦30,000" },
          { size: "8x4", thickness: "12mm", price: "₦25,000" }
        ]
      },
      {
        id: "marine-002",
        name: "Marine Board Standard",
      image: mainframe, 
        shortDesc: "Affordable and reliable",
        variations: [
          { size: "8x4", thickness: "15mm", price: "₦28,000" }
        ]
      },
      {
        id: "marine-003",
        name: "Marine Board Standard",
     image: mainframe,    
        shortDesc: "Affordable and reliable",
        variations: [
          { size: "8x4", thickness: "15mm", price: "₦28,000" }
        ]
      },
      {
        id: "marine-004",
        name: "Marine Board Standard",
        image: mainframe, 
        shortDesc: "Affordable and reliable",
        variations: [
          { size: "8x4", thickness: "15mm", price: "₦28,000" }
        ]
      },
      {
        id: "marine-005",
        name: "Marine Board Premium",
        image: mainframe,   // ✅ use imported image, not string
        shortDesc: "High durability marine board",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦30,000" },
          { size: "8x4", thickness: "12mm", price: "₦25,000" }
        ]
      },
      {
        id: "marine-006",
        name: "Marine Board Premium",
        image: mainframe,   // ✅ use imported image, not string
        shortDesc: "High durability marine board",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦30,000" },
          { size: "8x4", thickness: "12mm", price: "₦25,000" }
        ]
      },
      {
        id: "marine-007",
        name: "Marine Board Premium",
        image: mainframe,   // ✅ use imported image, not string
        shortDesc: "High durability marine board",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦30,000" },
          { size: "8x4", thickness: "12mm", price: "₦25,000" }
        ]
      }
    ]
  },

  "hdf-board": {
    name: "HDF Boards",
    products: [
      {
        id: "hdf-001",
        name: "HDF Premium",
        image: mainframe, 
        shortDesc: "Smooth finish HDF board",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦20,000" }
        ]
      },
       {
        id: "hdf-002",
        name: "HDF Premium",
        image: mainframe,  
        shortDesc: "Smooth finish HDF board",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦20,000" }
        ]
      },
       {
        id: "hdf-003",
        name: "HDF Premium",
         image: mainframe, 
        shortDesc: "Smooth finish HDF board",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦20,000" }
        ]
      },
       {
        id: "hdf-004",
        name: "HDF Premium",
        image: mainframe, 
        shortDesc: "Smooth finish HDF board",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦20,000" }
        ]
      }
       
    ]
  },

  "wall-panels": {
    name: "Wall Panels",
    products: [
      {
        id: "wp-001",
        name: "3D Wall Panel",
        image: mainframe, 
        shortDesc: "Modern 3D wall finish",
        variations: [
          { size: "4x8", thickness: "10mm", price: "₦30,000" }
        ]
      },
      {
        id: "wp-002",
        name: "Wooden Wall Panel",
        image: mainframe, 
        shortDesc: "Natural wood texture",
        variations: [
          { size: "4x8", thickness: "12mm", price: "₦28,500" }
        ]
      },
       {
        id: "wp-003",
        name: "Wooden Wall Panel",
        image: mainframe, 
        shortDesc: "Natural wood texture",
        variations: [
          { size: "4x8", thickness: "12mm", price: "₦28,500" }
        ]
      },
       {
        id: "wp-004",
        name: "Wooden Wall Panel",
         image: mainframe, 
        shortDesc: "Natural wood texture",
        variations: [
          { size: "4x8", thickness: "12mm", price: "₦28,500" }
        ]
      }
    ]
  },

  "high-gloss-mdf": {
    name: "High Gloss MDF",
    products: [
      {
        id: "mdf-001",
        name: "Glossy White MDF",
        image: mainframe, 
        shortDesc: "Elegant glossy finish",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦35,000" }
        ]
      },
      {
        id: "mdf-002",
        name: "Black Gloss MDF",
         image: mainframe, 
        shortDesc: "Perfect for modern interiors",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦34,000" }
        ]
      },
      {
        id: "mdf-003",
        name: "Black Gloss MDF",
        image: mainframe, 
        shortDesc: "Perfect for modern interiors",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦34,000" }
        ]
      },
      {
        id: "mdf-004",
        name: "Black Gloss MDF",
         image: mainframe, 
        shortDesc: "Perfect for modern interiors",
        variations: [
          { size: "8x4", thickness: "18mm", price: "₦34,000" }
        ]
      }
    ]
  },

  "edge-tapes": {
    name: "Edge Tapes",
    products: [
      {
        id: "et-001",
        name: "PVC Edge Tape",
         image: mainframe, 
        shortDesc: "Durable PVC edge tape",
        variations: [
          { size: "22mm", thickness: "1mm", price: "₦5,000" }
        ]
      },
      {
        id: "et-002",
        name: "ABS Edge Tape",
        image: mainframe, 
        shortDesc: "Strong ABS material",
        variations: [
          { size: "22mm", thickness: "2mm", price: "₦6,000" }
        ]
      },
      {
        id: "et-003",
        name: "ABS Edge Tape",
         image: mainframe, 
        shortDesc: "Strong ABS material",
        variations: [
          { size: "22mm", thickness: "2mm", price: "₦6,000" }
        ]
      },
      {
        id: "et-004",
        name: "ABS Edge Tape",
        image: mainframe, 
        shortDesc: "Strong ABS material",
        variations: [
          { size: "22mm", thickness: "2mm", price: "₦6,000" }
        ]
      }
    ]
  }
};

