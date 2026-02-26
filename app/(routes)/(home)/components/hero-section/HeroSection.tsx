"use client";

import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { HeroSlide, HeroSlideData } from "./HeroSlide";
import { CarouselArrow } from "./CarouselArrow";

const heroSlides: HeroSlideData[] = [
  {
    backgroundImage: "/images/pics/tyres3.jpeg",
    title: "Performance You Can Feel\nGrip You Can Trust",
    description:
      "Upgrade your ride with premium tyres and alloy wheels engineered for safety, durability, and ultimate road control.",
  },
  {
    backgroundImage: "/images/pics/wheels2.jpeg",
    title: "Style Meets Strength\nDrive with Confidence",
    description:
      "Discover high-quality wheels and tyres designed to enhance performance, improve handling, and elevate your vehicle’s look.",
  },
  {
    backgroundImage: "/images/pics/tyres8.jpeg",
    title: "Built for Every Road\nReady for Every Season",
    description:
      "From city streets to rugged terrain, explore tyres and wheels engineered for performance, safety, and all-weather reliability.",
  },
  {
    backgroundImage: "/images/pics/wheels4.jpeg",
    title: "Precision Engineering\nUnmatched Control",
    description:
      "Experience superior grip, responsive handling, and lasting durability with wheels and tyres crafted for drivers who demand more.",
  },
];

export const HeroSection = () => {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  // 创建扩展的幻灯片数组：最后一张 + 原始数组 + 第一张
  const extendedSlides = [
    heroSlides[heroSlides.length - 1],
    ...heroSlides,
    heroSlides[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // 从索引1开始（第一张真实图片）
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isAnimating = useRef(false);

  const handlePrevious = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => {
      isAnimating.current = false;
    }, 800);
  };

  const handleNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => {
      isAnimating.current = false;
    }, 800);
  };

  useEffect(() => {
    // 当到达克隆的幻灯片时，瞬间跳转到真实的幻灯片
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(heroSlides.length);
      }, 800);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 850);
    } else if (currentIndex === heroSlides.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 800);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 850);
    }
  }, [currentIndex]);

  // 获取真实的幻灯片索引（用于激活状态）
  const getRealIndex = (index: number) => {
    if (index === 0) return heroSlides.length - 1;
    if (index === heroSlides.length + 1) return 0;
    return index - 1;
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: 500, md: 700 },
      }}
      data-testid="hero-section"
    >
      {/* Slides Container */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: isTransitioning ? "transform 0.8s ease-in-out" : "none",
        }}
        data-testid="hero-slides-container"
      >
        {extendedSlides.map((slide, index) => (
          <HeroSlide
            key={index}
            data={slide}
            isActive={getRealIndex(currentIndex) === getRealIndex(index)}
          />
        ))}
      </Box>

      {/* Navigation Arrows */}
      <CarouselArrow
        direction="left"
        onClick={handlePrevious}
        sx={{ zIndex: 2 }}
        data-testid="hero-slide-arrow-left"
      />
      <CarouselArrow
        direction="right"
        onClick={handleNext}
        sx={{ zIndex: 2 }}
        data-testid="hero-slide-arrow-right"
      />
    </Box>
  );
};
