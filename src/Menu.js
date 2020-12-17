import React from 'react';

const Menu = ({ items }) => {
	return (
		<section className='section-center'>
			{items.map((e) => {
				const { id, title, img, desc, price } = e;
				return (
					<article className='menu-item' key={id}>
						<img src={img} alt={title} className='photo' />
						<div className='item-info'>
							<header>
								<h4>{title}</h4>
								<h4 className='price'>${price}</h4>
							</header>
							<p className='item-text'>{desc}</p>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Menu;
