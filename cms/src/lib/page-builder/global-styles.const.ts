export const GLOBAL_STYLES = `
.grid {
	display: grid;
  margin: 0 auto;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	align-items: center;
	padding: 16px;
	grid-gap: 12px;
}
.grid-large {
	max-width: 1400px;
}
.grid-small {
	max-width: 800px;
}
.gc-1 { grid-column: span 1 / span 1; }
.gc-2 { grid-column: span 2 / span 2; }
.gc-3 { grid-column: span 3 / span 3; }
.gc-4 { grid-column: span 4 / span 4; }
.gc-5 { grid-column: span 5 / span 5; }
.gc-6 { grid-column: span 6 / span 6; }
.gc-7 { grid-column: span 7 / span 7; }
.gc-8 { grid-column: span 8 / span 8; }
.gc-9 { grid-column: span 9 / span 9; }
.gc-10 { grid-column: span 10 / span 10; }
.gc-11 { grid-column: span 11 / span 11; }
.gc-12 { grid-column: span 12 / span 12; }
.gcs-1 { grid-column-start: 1; }
.gcs-2 { grid-column-start: 2; }
.gcs-3 { grid-column-start: 3; }
.gcs-4 { grid-column-start: 4; }
.gcs-5 { grid-column-start: 5; }
.gcs-6 { grid-column-start: 6; }
.gcs-7 { grid-column-start: 7; }
.gcs-8 { grid-column-start: 8; }
.gcs-9 { grid-column-start: 9; }
.gcs-10 { grid-column-start: 10; }
.gcs-11 { grid-column-start: 11; }
.gcs-12 { grid-column-start: 12; }
@media (max-width: 900px) {
	.gc-sm-1 { grid-column: span 1 / span 1; }
	.gc-sm-2 { grid-column: span 2 / span 2; }
	.gc-sm-3 { grid-column: span 3 / span 3; }
	.gc-sm-4 { grid-column: span 4 / span 4; }
	.gc-sm-5 { grid-column: span 5 / span 5; }
	.gc-sm-6 { grid-column: span 6 / span 6; }
	.gc-sm-7 { grid-column: span 7 / span 7; }
	.gc-sm-8 { grid-column: span 8 / span 8; }
	.gc-sm-9 { grid-column: span 9 / span 9; }
	.gc-sm-10 { grid-column: span 10 / span 10; }
	.gc-sm-11 { grid-column: span 11 / span 11; }
	.gc-sm-12 { grid-column: span 12 / span 12; }
	.gcs-sm-1 { grid-column-start: 1; }
	.gcs-sm-2 { grid-column-start: 2; }
	.gcs-sm-3 { grid-column-start: 3; }
	.gcs-sm-4 { grid-column-start: 4; }
	.gcs-sm-5 { grid-column-start: 5; }
	.gcs-sm-6 { grid-column-start: 6; }
	.gcs-sm-7 { grid-column-start: 7; }
	.gcs-sm-8 { grid-column-start: 8; }
	.gcs-sm-9 { grid-column-start: 9; }
	.gcs-sm-10 { grid-column-start: 10; }
	.gcs-sm-11 { grid-column-start: 11; }
	.gcs-sm-12 { grid-column-start: 12; }
}
@media (max-width: 600px) {
	.gc-xs-1 { grid-column: span 1 / span 1; }
	.gc-xs-2 { grid-column: span 2 / span 2; }
	.gc-xs-3 { grid-column: span 3 / span 3; }
	.gc-xs-4 { grid-column: span 4 / span 4; }
	.gc-xs-5 { grid-column: span 5 / span 5; }
	.gc-xs-6 { grid-column: span 6 / span 6; }
	.gc-xs-7 { grid-column: span 7 / span 7; }
	.gc-xs-8 { grid-column: span 8 / span 8; }
	.gc-xs-9 { grid-column: span 9 / span 9; }
	.gc-xs-10 { grid-column: span 10 / span 10; }
	.gc-xs-11 { grid-column: span 11 / span 11; }
	.gc-xs-12 { grid-column: span 12 / span 12; }
	.gcs-xs-1 { grid-column-start: 1; }
	.gcs-xs-2 { grid-column-start: 2; }
	.gcs-xs-3 { grid-column-start: 3; }
	.gcs-xs-4 { grid-column-start: 4; }
	.gcs-xs-5 { grid-column-start: 5; }
	.gcs-xs-6 { grid-column-start: 6; }
	.gcs-xs-7 { grid-column-start: 7; }
	.gcs-xs-8 { grid-column-start: 8; }
	.gcs-xs-9 { grid-column-start: 9; }
	.gcs-xs-10 { grid-column-start: 10; }
	.gcs-xs-11 { grid-column-start: 11; }
	.gcs-xs-12 { grid-column-start: 12; }
}
.header {
	padding-top: 16px;
	padding-right: 16px;
	padding-bottom: 16px;
	padding-left: 16px;
}
.nav {
	padding-top: 16px;
	padding-right: 16px;
	padding-bottom: 16px;
	padding-left: 16px;
}
.footer {
	padding-top: 16px;
	padding-right: 16px;
	padding-bottom: 16px;
	padding-left: 16px;
}
.section {
	padding-top: 16px;
	padding-right: 16px;
	padding-bottom: 16px;
	padding-left: 16px;
}
.article {
	padding-top: 16px;
	padding-right: 16px;
	padding-bottom: 16px;
	padding-left: 16px;
}
.aside {
	padding-top: 16px;
	padding-right: 16px;
	padding-bottom: 16px;
	padding-left: 16px;
}
.label {
	display: flex;
	flex-direction: column-reverse;
	margin-bottom: 1rem;
}
.input {
	width: 100%;
	height: 3rem;
	border: 1px solid #c4d8ce;
	border-radius: 4px;
	padding: 0 16px;
	margin-top: 4px;
	font-size: 16px;
}
.h1 {
	font-size: 48px;
	margin-top: 1em;
	margin-bottom: 1em;
}
.h2 {
	font-size: 32px;
	margin-top: 0.8em;
	margin-bottom: 0.8em;
}
.h3 {
	font-size: 24px;
	margin-top: 0.8em;
	margin-bottom: 0.8em;
}
.h4 {
	font-size: 20px;
	margin-top: 0.6em;
	margin-bottom: 0.6em;
}
.h5 {
	font-size: 16px;
	margin-top: 0.4em;
	margin-bottom: 0.4em;
}
.h6 {
	font-size: 12px;
	margin-top: 0.2em;
	margin-bottom: 0.2em;
}
`;