import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../styles/FAQ.module.scss';

const FAQ = ({ title, data }) => {
	const [open, setOpen] = useState(null);

	const handleToggle = (i) => {
		open === i ? setOpen(null) : setOpen(i);
	};

	return (
		<div className={styles.faq}>
			<div className={styles.container}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.faq_items}>
					{data.map((item, index) => {
						return (
							<div
								className={`${styles.faq_item} ${
									index === open && styles.item_padding
								}`}
								key={index}>
								<div
									className={styles.faq_item_title}
									onClick={() => handleToggle(index)}>
									{item.question}
									<motion.div
										initial={{ rotate: 0 }}
										animate={{ rotate: open === index ? 180 : 0 }}
										transition={{ duration: 0.5 }}
										className={styles.faq_arrow}>
										<FaChevronDown size={20} />
									</motion.div>
								</div>
								<motion.div
									initial={{ height: 0 }}
									animate={{ height: index === open ? 'auto' : 0 }}
									transition={{ duration: 0.5 }}
									className={styles.faq_item_body}>
									{item.answer}
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FAQ;
