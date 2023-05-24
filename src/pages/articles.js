import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from "../../public/images/articles/future-artificial-intelligence-robot-cyborg.jpg"
import article2 from "../../public/images/articles/neural.jpg"
import {motion, useMotionValue} from "framer-motion"
import article3 from "../../public/images/articles/decision tree.jpg"
import article4 from "../../public/images/articles/machine learning.jpg"
import article5 from "../../public/images/articles/rf gradient.jpg"
import article6 from "../../public/images/articles/naive bayes.jpg"
import article7 from "../../public/images/articles/auc.png"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({title, img, link}) => {

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block"
    x.set(event.pageX)
    y.set(-10)
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none"
    x.set(0)
    y.set(0)
  }

  return(
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>
      {title}</h2>
      <FramerImage 
      style={{x:x, y:y}}
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{duration:0.2}}}
      ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
      </Link>
  )
}

const Article = ({img, title, date, link}) => {
  return(
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
    className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
    justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col
    '>
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
  return(
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
    rounded-br-3xl'
    />
      <Link 
      href={link} 
      target="_blank" 
      className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
    >
      <FramerImage src={img} alt={title} className='w-full h-auto' 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw, 
        (max-width: 1200px) 50vw, 
        50vw"
      />
      </Link>
      <Link href={link} target="_blank">
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>Richmond Sin | Articles Page</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Knowledge Empowers Change" className='mb-16
            lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
            ' />
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
              <FeaturedArticle 
              title="Real-Life Examples of Supervised Learning and Unsupervised Learning"
              summary="In this tutorial, we’ll discuss some real-life examples of supervised and unsupervised learning."
              time="10 mins read"
              link="https://www.baeldung.com/cs/examples-supervised-unsupervised-learning"
              img={article1}
              />
              <FeaturedArticle 
              title="The Concepts of Dense and Sparse in the Context of Neural Networks"
              summary="In this tutorial, we’ll explore the concepts of dense and sparse layers, their differences, and their applications."
              time="10 mins read"
              link="https://www.baeldung.com/cs/neural-networks-dense-sparse"
              img={article2}
              />
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
            <u1>
              <Article
              title="Node Impurity in Decision Trees"
              date="Jul 16, 2022"
              link="https://www.baeldung.com/cs/impurity-entropy-gini-index"
              img={article3}
              />
              <Article
              title="Basic Concepts of Machine Learning"
              date="Nov 5, 2022"
              link="https://www.baeldung.com/cs/ml-fundamentals"
              img={article4}
              />
              <Article
              title="Gradient Boosting Trees vs. Random Forests"
              date="May 15, 2023"
              link="https://www.baeldung.com/cs/gradient-boosting-trees-vs-random-forests"
              img={article5}
              />
              <Article
              title="Decision Tree vs. Naive Bayes Classifier"
              date="May 12, 2023"
              link="https://www.baeldung.com/cs/decision-tree-vs-naive-bayes"
              img={article6}
              />
              <Article
              title="Accuracy vs AUC in Machine Learning"
              date="Nov 6, 2022"
              link="https://www.baeldung.com/cs/ml-accuracy-vs-auc"
              img={article7}
              />
            </u1>
          </Layout>
        </main>
    </>
  )
}

export default articles