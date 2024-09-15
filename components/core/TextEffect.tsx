'use client';
import { motion, TargetAndTransition, Variants } from 'framer-motion';
import React from 'react';

type PresetType =  'fade' ;

type TextEffectProps = {
  children: string;
  per?: 'word';
  as?: keyof JSX.IntrinsicElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
  delay?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {

  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  }

};

const AnimationComponent: React.FC<{
  word: string;
  variants: Variants;
  per: 'word' ;
}> = React.memo(({ word, variants, per }) => {
  if (per === 'word') {
    return (
      <motion.span
        aria-hidden='true'
        variants={variants}
        className='inline-block whitespace-pre'
      >
        {word}
      </motion.span>
    );
  }


});

AnimationComponent.displayName = 'AnimationComponent';

export function TextEffect({
  children,
  per = 'word',
  as = 'p',
  variants,
  className,
  preset,
  delay = 0,
  trigger = true,
  onAnimationComplete,
}: TextEffectProps) {
  const words = children.split(/(\S+)/);
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  const delayedContainerVariants: Variants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...(containerVariants.visible as TargetAndTransition)?.transition,
        delayChildren: delay,
      },
    },
  };

  return (
    <MotionTag
      initial='hidden'
      animate={trigger ? 'visible' : 'hidden'}
      aria-label={children}
      variants={delayedContainerVariants}
      className={className}
      onAnimationComplete={onAnimationComplete}
    >
      {words.map((word, wordIndex) => (
        <AnimationComponent
          key={`word-${wordIndex}`}
          word={word}
          variants={itemVariants}
          per={per}
        />
      ))}
    </MotionTag>
  );
}
