import { useState } from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import styles from '../styles/Slider.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
	const [x, setX] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
		x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
		x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100);
	};

	return (
		<div className={styles.slider}>
			<div className={styles.container}>
				<FaChevronLeft
					size={50}
					className={`${styles.slider_arrow} ${styles.slider_arrow__left}`}
					onClick={prevSlide}
				/>
				<FaChevronRight
					size={50}
					className={`${styles.slider_arrow} ${styles.slider_arrow__right}`}
					onClick={nextSlide}
				/>
				{slides.map((slide, index) => {
					return (
						<motion.div
							initial={{ x: 0 }}
							animate={{ x: `${x}%` }}
							transition={{
								type: 'spring',
								stiffness: 120,
								damping: 20,
							}}
							key={index}
							className={styles.slider_item}>
							<div className={styles.slider_item_left}>
								{slide.image ? (
									<Image
										className={`${styles.slider_item_img} ${styles.border}`}
										src={slide.image}
										alt={slide.alt}
									/>
								) : (
									<iframe
										className={`${styles.slider_item_iframe} ${styles.border}`}
										src={slide.url}
										frameBorder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media;'
									/>
								)}
							</div>
							<div className={styles.slider_item_right}>
								<div className={styles.slider_item_copy}>
									<h2 className={styles.slider_item_title}>{slide.title}</h2>
									<p className={styles.slider_item_body}>{slide.desc}</p>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Slider;
