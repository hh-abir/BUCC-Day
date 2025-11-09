"use client"

import { useState } from "react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number>(0)

  const images = [
    {
      id: 1,
      title: "Mountain Vista",
      src: "/beautiful-aurora-borealis-mountain-landscape.jpg",
    },
    {
      id: 2,
      title: "Northern Lights",
      src: "/aurora-borealis-dancing-lights-sky.jpg",
    },
    {
      id: 3,
      title: "Starry Night",
      src: "/night-sky-with-stars-and-aurora.jpg",
    },
    {
      id: 4,
      title: "Cosmic Beauty",
      src: "/blue-aurora-borealis-cosmic.jpg",
    },
    {
      id: 5,
      title: "Frozen Landscape",
      src: "/snowy-landscape-with-aurora-lights.jpg",
    },
    {
      id: 6,
      title: "Night Wonders",
      src: "/glowing-aurora-borealis-night.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Event Gallery
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore highlights from our past events</p>
        </div>

        <div className="mb-8">
          <div className="relative overflow-hidden rounded-3xl h-96 sm:h-[500px] border-2 border-blue-200">
            {/* Main image */}
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].title}
              className="w-full h-full object-cover"
            />

            {/* Image title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent p-6 sm:p-8">
              <h3 className="text-white font-semibold text-2xl sm:text-3xl">{images[selectedImage].title}</h3>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 border border-blue-400 flex items-center justify-center text-white hover:bg-blue-700 transition-all"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setSelectedImage((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 border border-blue-400 flex items-center justify-center text-white hover:bg-blue-700 transition-all"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 sm:gap-4">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                selectedImage === index
                  ? "border-blue-600 scale-105 ring-2 ring-blue-400/50"
                  : "border-white/20 hover:border-blue-400 opacity-75 hover:opacity-100"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
