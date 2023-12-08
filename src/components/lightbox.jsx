import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./styles.module.css";

// import plug-ins if needed
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Lightbox({ projectKey, projectCollection }) {
	const onInit = function response() {
		console.log("lightgallery has been initialised");
	};
	return (
		<div className="project-gallery">
			<LightGallery
				onInit={onInit}
				speed={500}
				plugins={[lgThumbnail, lgZoom]}
				download={false}
				className="lightgallery"
			>
				{projectCollection.map((element) => (
					<a
						href={element.image}
						key={projectKey}
						className="lightgallery-img-link"
					>
						<img
							src={element.image}
							alt={element.alt}
							className="lightgallery-img"
						/>
					</a>
				))}
			</LightGallery>
		</div>
	);
}
