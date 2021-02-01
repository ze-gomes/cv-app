import React, { Component } from 'react';
import {
	Page,
	Image,
	Text,
	View,
	Document,
	StyleSheet,
	Link,
} from '@react-pdf/renderer';
import { AiFillLinkedin } from 'react-icons/ai';

export class PDFDocument extends Component {
	constructor(props) {
		super(props);

		this.state = {
			locsvg: '',
		};
	}

	converter = (idSVG) => {
		let converted = '';
		var svg = document.getElementById(idSVG);
		var svgData = new XMLSerializer().serializeToString(svg);
		var canvas = document.createElement('canvas');
		var svgSize = svg.getBoundingClientRect();
		canvas.width = svgSize.width;
		canvas.height = svgSize.height;
		var ctx = canvas.getContext('2d');
		var img = document.createElement('img');
		img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));
		const promise = new Promise((resolve) => {
			img.onload = function () {
				ctx.drawImage(img, 0, 0);
				// Now is done
				resolve(canvas.toDataURL('image/png'));
			};
		});
		// At this point, "promise" is already settled.
		promise.then((result) => this.setState({ locsvg: result }));
	};

	render() {
		const cv = JSON.parse(localStorage.getItem('cv'));
		const photo = localStorage.getItem('Photo');
		const locsvg = localStorage.getItem('locsvg');

		// Create styles

		const styles = StyleSheet.create({
			page: {
				flexDirection: 'row',
				backgroundColor: '#E4E4E4',
				paddingTop: 35,
				paddingBottom: 65,
				paddingHorizontal: 20,
			},
			section: {
				margin: 10,
				padding: 10,
				flexGrow: 1,
			},
			photo: {
				heigth: 90,
				width: 90,
				objectFit: 'contain',
				order: 1,
				position: 'absolute',
				top: 15,
			},
			info: {
				fontSize: 14,
				padding: 4,
				marginRight: 5,
				color: '#000000',
				textDecoration: 'none',
			},
			header: {
				marginLeft: 110,
				marginRight: 30,
				textAlign: 'justify',
				width: 300,
			},
			name: {
				fontWeight: 500,
				fontSize: 25,
				paddingBottom: 5,
			},
			description: {
				fontSize: 14,
				maxLines: 6,
			},
		});

		return (
			<Document id="b">
				<Page size="A4" style={styles.page}>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<Image
							debug="true"
							src={photo}
							allowDangerousPaths="true"
							style={styles.photo}
						></Image>
						<View style={styles.header}>
							<Text style={styles.name}>{cv.name}</Text>
							<Text style={styles.description}>{cv.bio}</Text>
						</View>
						<View
							style={{
								width: '100%',
							}}
						>
							<Text style={styles.info}>{cv.location}</Text>
							<Text style={styles.info}>{cv.phone}</Text>
							<Link src={`mailto:${cv.linkedin}`} style={styles.info}>
								{cv.email}
							</Link>
							<Link src={cv.linkedin} style={styles.info}>
								{cv.linkedin}
							</Link>
							<Link src={cv.linkedin} style={styles.info}>
								{cv.linkedin}
							</Link>
						</View>
					</View>
				</Page>
			</Document>
		);
	}
}

export default PDFDocument;
