import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plug-ins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom"; 

import "./lightbox-styles.css"

export default function Lightbox ({ projectKey, projectCollection }) {
	const onInit = function response() {
		console.log("lightgallery has been initialised");
	};

	return (
		<div className="project-gallery-container">
			<LightGallery
				onInit={onInit}
				speed={500}
				plugins={[lgThumbnail, lgZoom]}
				download={false}
				thumbnail={true}
				id="gallery"
				key={projectKey}
			>
				{
					projectCollection.map((element) => (
						<a
							href={element.image}
						>
							<img
								src={element.image}
								alt={element.alt}
								className="gallery-img"
							
							/>
						</a>
					))
				}
			</LightGallery>
		</div>
	);
}