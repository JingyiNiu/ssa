"use client";

import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { HeroSlide, HeroSlideData } from "./HeroSlide";
import { CarouselArrow } from "./CarouselArrow";
import { SlideOverlay } from "./SlideOverlay";

const heroSlides: HeroSlideData[] = [
  {
    backgroundImage: "/images/pics/hero-slide.png",
    title: "New Top Product\nHigh Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    backgroundImage: "/images/pics/hero-slide.png",
    title: "Premium Selection\nBest Value",
    description:
      "Aliquam ullamcorper imperdiet tortor eu gravida. ",
  },
];

export const HeroSection = () => {
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
        height: 700,
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
