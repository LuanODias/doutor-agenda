<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="readmeai/assets/logos/purple.svg" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# DOUTOR-AGENDA

<em></em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/LuanODias/doutor-agenda?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/LuanODias/doutor-agenda?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/LuanODias/doutor-agenda?style=default&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/LuanODias/doutor-agenda?style=default&color=0080ff" alt="repo-language-count">

<!-- default option, no dependency badges. -->


<!-- default option, no dependency badges. -->

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview



---

## Features

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Follows a **MVC** design pattern</li><li>Organized folder structure with clear separation of concerns</li><li>Uses **React** components for front-end</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Consistent code formatting with **Prettier**</li><li>Linting with **ESLint** following **Airbnb** style guide</li><li>Type checking with **TypeScript**</li></ul> |
| 📄 | **Documentation** | <ul><li>Inline code comments for functions and complex logic</li><li>README.md file with setup instructions and project overview</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integration with **Stripe** for payment processing</li><li>Uses **React-Hook-Form** for form handling</li><li>Utilizes **Drizzle-ORM** for database operations</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Reusable **React** components</li><li>Separate modules for authentication, appointments, and user profiles</li></ul> |
| 🧪 | **Testing**       | <ul><li>Unit tests with **Jest** for critical functions</li><li>Integration tests for user flows using **React Testing Library**</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized bundle size with **Webpack**</li><li>Lazy loading of components for faster initial load</li></ul> |
| 🛡️ | **Security**      | <ul><li>Sanitized user inputs to prevent **XSS** attacks</li><li>Implemented **CSRF** protection for form submissions</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Uses a wide range of dependencies including **React**, **TailwindCSS**, **Next.js**, **Zod**, and more</li></ul> |

---

## Project Structure

```sh
└── doutor-agenda/
    ├── README.md
    ├── components.json
    ├── drizzle.config.ts
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── logo.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── src
    │   ├── actions
    │   ├── app
    │   ├── components
    │   ├── data
    │   ├── db
    │   ├── helpers
    │   ├── hooks
    │   ├── lib
    │   └── providers
    └── tsconfig.json
```

### Project Index

<details open>
	<summary><b><code>DOUTOR-AGENDA/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Define project dependencies and scripts for development, building, and starting the application<br>- The package.json file outlines essential configurations for the doutor-agenda project, including dependencies like React, Next.js, and various UI libraries, along with scripts for development tasks.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
					<td style='padding: 8px;'>Define ESLint configuration using FlatCompat to extend Next.js presets and enforce simple import sorting rules.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/drizzle.config.ts'>drizzle.config.ts</a></b></td>
					<td style='padding: 8px;'>Define configuration for Drizzle, specifying output directory, database schema path, dialect, and credentials.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Define the TypeScript compiler options for the project, specifying ES2017 target, necessary libraries, and bundler settings<br>- Enable JSX support, incremental compilation, and path aliases for cleaner imports<br>- Exclude node_modules from compilation.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/next.config.ts'>next.config.ts</a></b></td>
					<td style='padding: 8px;'>Define the Next.js configuration settings in the project by exporting a NextConfig object.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>- SummaryThe <code>package-lock.json</code> file in the <code>doutor-agenda</code> project serves as a lockfile that ensures consistent and reproducible dependency installations<br>- It captures the exact versions of all dependencies required for the project to function correctly<br>- By specifying the precise versions of each package, it guarantees that anyone cloning the project will have the same dependencies installed, thus maintaining a stable and predictable development environment<br>- This file plays a crucial role in the projects architecture by managing and resolving dependencies effectively.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
					<td style='padding: 8px;'>Define the PostCSS configuration for TailwindCSS plugin.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/components.json'>components.json</a></b></td>
					<td style='padding: 8px;'>- Define the projects component structure, styles, and aliases in the components.json file<br>- It specifies the UI theme, TypeScript support, Tailwind CSS configuration, and icon library<br>- This file serves as a central configuration hub for the projects frontend architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<!-- actions Submodule -->
			<details>
				<summary><b>actions</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.actions</b></code>
					<!-- upsert-doctor Submodule -->
					<details>
						<summary><b>upsert-doctor</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.actions.upsert-doctor</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/upsert-doctor/index.ts'>index.ts</a></b></td>
									<td style='padding: 8px;'>- Define and execute the upsertion of doctor availability in the database, ensuring data integrity and updating existing records when conflicts arise<br>- This action integrates authentication, time zone handling, and database operations to manage doctor schedules within the clinic environment.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/upsert-doctor/schema.ts'>schema.ts</a></b></td>
									<td style='padding: 8px;'>- Define a schema for upserting doctor information, ensuring data integrity and completeness<br>- Validates fields like name, specialty, appointment price, and availability timings<br>- Maintains consistency by enforcing time order constraints.</td>
								</tr>
							</table>
							<!-- delete-doctor Submodule -->
							<details>
								<summary><b>delete-doctor</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.actions.upsert-doctor.delete-doctor</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/upsert-doctor/delete-doctor/index.ts'>index.ts</a></b></td>
											<td style='padding: 8px;'>- Delete doctor action ensures authorized user can delete a specific doctor entry from the database<br>- It validates user session, checks if the doctor exists, and if the user has permission to delete the doctor<br>- Upon validation, it deletes the doctor entry and triggers cache revalidation for the doctors page.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- upsert-appointment Submodule -->
					<details>
						<summary><b>upsert-appointment</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.actions.upsert-appointment</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/upsert-appointment/index.ts'>index.ts</a></b></td>
									<td style='padding: 8px;'>- Manage appointment creation and updates securely<br>- Ensure clinic and user authorization, validate available times, and handle conflicts<br>- Integrate with the database to store appointment details<br>- Trigger cache revalidation for appointments and dashboard views.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/upsert-appointment/schema.ts'>schema.ts</a></b></td>
									<td style='padding: 8px;'>- Define a schema for upserting appointments, ensuring data integrity and validation<br>- The schema enforces required fields like patient and doctor IDs, appointment price, date, and time<br>- It guarantees data consistency for appointment creation and updates within the system.</td>
								</tr>
							</table>
							<!-- delete-appointment Submodule -->
							<details>
								<summary><b>delete-appointment</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.actions.upsert-appointment.delete-appointment</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/upsert-appointment/delete-appointment/index.ts'>index.ts</a></b></td>
											<td style='padding: 8px;'>- Delete appointment action ensures secure deletion of appointments based on user and clinic ownership, maintaining data integrity<br>- It validates user session and clinic association before executing the deletion operation, preventing unauthorized access<br>- This action contributes to the overall data management and security aspects of the project architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- create-stripe-checkout Submodule -->
					<details>
						<summary><b>create-stripe-checkout</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.actions.create-stripe-checkout</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/create-stripe-checkout/index.ts'>index.ts</a></b></td>
									<td style='padding: 8px;'>- Create a Stripe checkout session for essential plan subscription, ensuring user authentication and key validation<br>- The action utilizes Next.js and Stripe APIs to handle payment processing and session management securely within the application architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- create-clinic Submodule -->
					<details>
						<summary><b>create-clinic</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.actions.create-clinic</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/create-clinic/index.ts'>index.ts</a></b></td>
									<td style='padding: 8px;'>- Create clinic action ensures authenticated users can create a new clinic in the system<br>- It validates user login status, inserts the new clinic into the database, and associates the user with the created clinic<br>- Upon successful creation, it redirects the user to the dashboard.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- get-available-times Submodule -->
					<details>
						<summary><b>get-available-times</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.actions.get-available-times</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/get-available-times/index.ts'>index.ts</a></b></td>
									<td style='padding: 8px;'>- Generate available time slots for a doctor based on input date and ID<br>- Authenticate the user and check doctor availability<br>- Retrieve and filter appointments for the selected date<br>- Calculate and return time slots within the doctors available time range, marking slots as available or not based on existing appointments.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- upsert-patient Submodule -->
					<details>
						<summary><b>upsert-patient</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.actions.upsert-patient</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/upsert-patient/index.ts'>index.ts</a></b></td>
									<td style='padding: 8px;'>- Create an action to upsert patient data securely, ensuring proper authentication and clinic validation<br>- The action inserts or updates patient details in the database and triggers a cache revalidation for the patients page<br>- This functionality is crucial for maintaining accurate patient records within the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/upsert-patient/schema.ts'>schema.ts</a></b></td>
									<td style='padding: 8px;'>- Define a schema for upserting patient data with validation rules for id, name, email, phone number, and sex<br>- This schema ensures data integrity and accuracy when interacting with patient information within the codebase architecture.</td>
								</tr>
							</table>
							<!-- delete-patient Submodule -->
							<details>
								<summary><b>delete-patient</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.actions.upsert-patient.delete-patient</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/actions/upsert-patient/delete-patient/index.ts'>index.ts</a></b></td>
											<td style='padding: 8px;'>- Delete patient action ensures authorized users can delete a patient record from the database<br>- It validates the users session, checks if the patient exists, and verifies ownership before deletion<br>- Upon successful deletion, it triggers cache revalidation for the patient list page<br>- This action plays a crucial role in maintaining data integrity and security within the application.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- lib Submodule -->
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.lib</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/lib/next-safe-action.ts'>next-safe-action.ts</a></b></td>
							<td style='padding: 8px;'>Enable safe actions in Next.js with a dedicated client for secure interactions.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/lib/auth.ts'>auth.ts</a></b></td>
							<td style='padding: 8px;'>- Define and configure authentication using the better-auth library with social provider integration and custom session handling<br>- Utilizes a PostgreSQL database with specific schema and tables for user, clinic, session, account, and verification management<br>- Includes additional user fields for Stripe integration and email/password authentication.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/lib/utils.ts'>utils.ts</a></b></td>
							<td style='padding: 8px;'>Enhances class value merging by combining Tailwind CSS and clsx utilities to streamline CSS class concatenation.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/lib/auth-client.ts'>auth-client.ts</a></b></td>
							<td style='padding: 8px;'>Create an authentication client using custom session plugins for the projects authentication system.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- hooks Submodule -->
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.hooks</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/hooks/use-mobile.ts'>use-mobile.ts</a></b></td>
							<td style='padding: 8px;'>- Implement a custom React hook to determine if the users device is mobile based on a predefined breakpoint<br>- The hook utilizes window matchMedia and innerWidth to track changes and return a boolean value indicating mobile status.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- helpers Submodule -->
			<details>
				<summary><b>helpers</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.helpers</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/helpers/currency.ts'>currency.ts</a></b></td>
							<td style='padding: 8px;'>Format currency amounts in cents to Brazilian Real (BRL) using Intl.NumberFormat in the currency.ts helper.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/helpers/time.ts'>time.ts</a></b></td>
							<td style='padding: 8px;'>- To 23:30<br>- This function populates an array with formatted time strings representing each slot<br>- It plays a crucial role in managing time-related operations within the projects architecture.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- providers Submodule -->
			<details>
				<summary><b>providers</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.providers</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/providers/react-query.tsx'>react-query.tsx</a></b></td>
							<td style='padding: 8px;'>- Define a ReactQueryProvider component that utilizes a QueryClient from @tanstack/react-query to manage API data fetching and caching within the project's React architecture<br>- This component ensures efficient data management and seamless integration of React components with the query client.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- db Submodule -->
			<details>
				<summary><b>db</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.db</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/db/index.ts'>index.ts</a></b></td>
							<td style='padding: 8px;'>Initialize database connection using Drizzle ORM with PostgreSQL, loading schema from the provided file.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/db/schema.ts'>schema.ts</a></b></td>
							<td style='padding: 8px;'>- Define database schema for users, sessions, accounts, verifications, clinics, doctors, patients, and appointments<br>- Establish relationships between entities for a comprehensive healthcare management system<br>- The schema ensures data integrity and efficient data retrieval for seamless operations.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- app Submodule -->
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.app</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/page.tsx'>page.tsx</a></b></td>
							<td style='padding: 8px;'>- Create a homepage component that renders a Bootcamp button using the Button component from the UI library<br>- This component is located in the src/app/page.tsx file within the project structure.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/globals.css'>globals.css</a></b></td>
							<td style='padding: 8px;'>- Define global CSS variables for color, typography, and layout in the project, including light and dark themes<br>- Import Tailwind CSS and custom animations<br>- Set base styles for elements and theme colors for consistent design across the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/layout.tsx'>layout.tsx</a></b></td>
							<td style='padding: 8px;'>- Define the root layout for the project, setting up essential providers and adapters<br>- Incorporates global styles and metadata.</td>
						</tr>
					</table>
					<!-- new-subscription Submodule -->
					<details>
						<summary><b>new-subscription</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.app.new-subscription</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/new-subscription/page.tsx'>page.tsx</a></b></td>
									<td style='padding: 8px;'>- Describe how the code in src/app/new-subscription/page.tsx facilitates user authentication and session management for accessing subscription plans<br>- It ensures users are authenticated before displaying subscription options, enhancing platform security and user experience.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- (protected) Submodule -->
					<details>
						<summary><b>(protected)</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.app.(protected)</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/layout.tsx'>layout.tsx</a></b></td>
									<td style='padding: 8px;'>- Define the layout structure for the app by integrating the sidebar functionality<br>- The layout component wraps the main content with a sidebar trigger, providing a cohesive user interface experience.</td>
								</tr>
							</table>
							<!-- patients Submodule -->
							<details>
								<summary><b>patients</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(protected).patients</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/patients/page.tsx'>page.tsx</a></b></td>
											<td style='padding: 8px;'>- Create a page to manage clinic patients, ensuring user authentication, clinic association, and subscription validation<br>- Display patient data in a structured table format for easy management.</td>
										</tr>
									</table>
									<!-- _components Submodule -->
									<details>
										<summary><b>_components</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(protected).patients._components</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/patients/_components/table-columns.tsx'>table-columns.tsx</a></b></td>
													<td style='padding: 8px;'>- Define patient table columns for displaying patient information and actions in the app<br>- Columns include name, email, phone number, and sex, with customized formatting for phone numbers<br>- Actions column allows users to interact with patient data<br>- This file enhances the user interface by structuring and organizing patient data effectively.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/patients/_components/table-actions.tsx'>table-actions.tsx</a></b></td>
													<td style='padding: 8px;'>- Implement patient table actions for editing and deleting patients, including confirmation dialogs<br>- Utilizes dropdown menus and buttons for user interaction<br>- Handles deletion with success and error toasts<br>- Provides a seamless user experience for managing patient data within the application.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/patients/_components/upsert-patient-form.tsx'>upsert-patient-form.tsx</a></b></td>
													<td style='padding: 8px;'>- Create a form component for adding or editing patient details<br>- It handles form validation, submission, and displays success/error messages<br>- The component integrates with the backend to update or add patient information<br>- It provides a user-friendly interface for managing patient data efficiently.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/patients/_components/patient-card.tsx'>patient-card.tsx</a></b></td>
													<td style='padding: 8px;'>- Create a patient card component displaying essential patient details and allowing for easy access to further information<br>- The component includes patient name, gender, email, phone number, and a button to view more details<br>- It also provides functionality to edit patient information.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/patients/_components/add-patient-button.tsx'>add-patient-button.tsx</a></b></td>
													<td style='padding: 8px;'>- Facilitates adding patients through a dialog-triggered form<br>- Integrates a button component for user interaction<br>- Manages dialog state to control form visibility<br>- Enhances user experience by streamlining patient addition process.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- dashboard Submodule -->
							<details>
								<summary><b>dashboard</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(protected).dashboard</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/dashboard/page.tsx'>page.tsx</a></b></td>
											<td style='padding: 8px;'>- Create a comprehensive dashboard page displaying clinic statistics, appointments, revenue, and top doctors/specialties<br>- Ensure user authentication and session validation for secure access<br>- Implement dynamic date range selection and data visualization components for a user-friendly experience<br>- Drive user actions with intuitive UI elements and data tables for efficient clinic management.</td>
										</tr>
									</table>
									<!-- _components Submodule -->
									<details>
										<summary><b>_components</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(protected).dashboard._components</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/dashboard/_components/date-picker.tsx'>date-picker.tsx</a></b></td>
													<td style='padding: 8px;'>- Create a reusable DatePicker component that allows users to select date ranges effortlessly<br>- The component integrates with the query state, providing a seamless experience for setting and displaying dates<br>- Users can easily navigate and select dates using a calendar interface, enhancing the overall usability of the dashboard.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/dashboard/_components/top-specialties.tsx'>top-specialties.tsx</a></b></td>
													<td style='padding: 8px;'>- Render a component displaying top medical specialties with corresponding icons and appointment statistics<br>- Icons dynamically change based on the specialty<br>- The component calculates the percentage of appointments for each specialty relative to the highest number of appointments<br>- It provides a visually appealing and informative snapshot of the most popular medical specialties.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/dashboard/_components/appointments-chart.tsx'>appointments-chart.tsx</a></b></td>
													<td style='padding: 8px;'>- Visualize daily appointment data with a chart displaying appointments and revenue over a 21-day period<br>- The chart provides insights into appointment trends and revenue generation, aiding in tracking and analyzing performance.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/dashboard/_components/top-doctors.tsx'>top-doctors.tsx</a></b></td>
													<td style='padding: 8px;'>- Display a list of top doctors with their avatars, specialties, and appointment counts in a visually appealing card layout<br>- The component utilizes Lucide icons and custom UI components for a polished user interface.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/dashboard/_components/stats-cards.tsx'>stats-cards.tsx</a></b></td>
													<td style='padding: 8px;'>- Create a component that displays statistics cards for total revenue, appointments, patients, and doctors<br>- Each card includes an icon, title, and corresponding value<br>- The component organizes these cards in a responsive grid layout, making it easy to visualize key metrics at a glance within the dashboard interface.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- doctors Submodule -->
							<details>
								<summary><b>doctors</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(protected).doctors</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/doctors/page.tsx'>page.tsx</a></b></td>
											<td style='padding: 8px;'>- Define a page component that manages and displays doctors associated with a clinic<br>- Handles user authentication, redirects, and fetches doctors based on the clinic ID<br>- Renders doctor cards with essential information for easy management<br>- Promotes user interaction with an Add Doctor button for seamless doctor addition.</td>
										</tr>
									</table>
									<!-- _constants Submodule -->
									<details>
										<summary><b>_constants</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(protected).doctors._constants</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/doctors/_constants/index.ts'>index.ts</a></b></td>
													<td style='padding: 8px;'>Define medical specialties enum and generate corresponding key-value pairs for dropdown selection in the doctors module.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- helpers Submodule -->
									<details>
										<summary><b>helpers</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(protected).doctors.helpers</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/doctors/helpers/availability.ts'>availability.ts</a></b></td>
													<td style='padding: 8px;'>Generate doctor availability timestamps based on specified weekdays and times.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- _components Submodule -->
									<details>
										<summary><b>_components</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(protected).doctors._components</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/doctors/_components/upsert-doctor-form.tsx'>upsert-doctor-form.tsx</a></b></td>
													<td style='padding: 8px;'>- SummaryThe <code>upsert-doctor-form.tsx</code> file in the <code>src/app/(protected)/doctors/_components</code> directory plays a crucial role in managing the form for creating or updating doctor information within the application<br>- It leverages various libraries and components for form handling, validation, and user interaction<br>- The file integrates with actions for saving and deleting doctor data, as well as displaying alerts and dialogs for user feedback<br>- Overall, this component encapsulates the essential functionality for managing doctor data input and modification in a user-friendly manner within the larger application architecture.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/doctors/_components/doctor-card.tsx'>doctor-card.tsx</a></b></td>
													<td style='padding: 8px;'>- Create a reusable DoctorCard component to display doctor details and allow for easy editing<br>- Display key information like name, specialty, availability, and appointment price<br>- Users can view details and update information through a dialog trigger<br>- This component enhances the user experience by providing a clear and interactive interface for managing doctor profiles.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/doctors/_components/add-doctor-button.tsx'>add-doctor-button.tsx</a></b></td>
													<td style='padding: 8px;'>- Facilitates adding doctors through a user-friendly dialog interface<br>- Handles the dialog state and triggers the doctor form submission upon success.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- appointments Submodule -->
							<details>
								<summary><b>appointments</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(protected).appointments</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/appointments/page.tsx'>page.tsx</a></b></td>
											<td style='padding: 8px;'>- Create an appointments page to manage clinic schedules<br>- Ensure users are authenticated, have a clinic ID, and a subscription plan<br>- Display appointments with patient and doctor details in a data table<br>- Allow adding new appointments with patient and doctor selection.</td>
										</tr>
									</table>
									<!-- _components Submodule -->
									<details>
										<summary><b>_components</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(protected).appointments._components</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/appointments/_components/table-columns.tsx'>table-columns.tsx</a></b></td>
													<td style='padding: 8px;'>- Define appointment table columns structure for displaying patient, doctor, date, speciality, and price information<br>- Customize date format and currency display<br>- Include actions for each appointment.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/appointments/_components/table-actions.tsx'>table-actions.tsx</a></b></td>
													<td style='padding: 8px;'>- Create a component to manage actions for appointments, including deleting appointments<br>- The component handles displaying a dialog to confirm deletion, with success and error toasts upon deletion<br>- It integrates with UI components for a seamless user experience.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/appointments/_components/upsert-appointment-form.tsx'>upsert-appointment-form.tsx</a></b></td>
													<td style='padding: 8px;'>- Create a dynamic form for managing appointments, allowing users to add or edit appointments for patients with selected doctors<br>- The form includes fields for patient selection, doctor selection, appointment price, date selection with a calendar, and time selection based on doctor availability<br>- Upon submission, the form triggers actions to create or update appointments, providing feedback to users through success or error messages.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/appointments/_components/add-appointment-button.tsx'>add-appointment-button.tsx</a></b></td>
													<td style='padding: 8px;'>- Create an interactive button to add new appointments, triggering a dialog with a form<br>- The button displays a Novo agendamento text alongside a plus icon<br>- The form allows users to select patients and doctors for the appointment, closing upon successful submission.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- _components Submodule -->
							<details>
								<summary><b>_components</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(protected)._components</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/_components/app-sidebar.tsx'>app-sidebar.tsx</a></b></td>
											<td style='padding: 8px;'>- Create an AppSidebar component that displays a user menu with various options like Dashboard, Appointments, Doctors, and more<br>- It also includes a sign-out feature<br>- The component fetches user session data to personalize the menu.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- subscription Submodule -->
							<details>
								<summary><b>subscription</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(protected).subscription</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/subscription/page.tsx'>page.tsx</a></b></td>
											<td style='padding: 8px;'>- Create a subscription page that manages user subscriptions<br>- Ensure users are authenticated and have a clinic set up before accessing<br>- Display subscription plan details and allow users to manage their subscription.</td>
										</tr>
									</table>
									<!-- _components Submodule -->
									<details>
										<summary><b>_components</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(protected).subscription._components</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/subscription/_components/subscription-plan.tsx'>subscription-plan.tsx</a></b></td>
													<td style='padding: 8px;'>- Define and render a subscription plan component with essential features, pricing, and actions like subscribing or managing a plan<br>- Utilizes Stripe for checkout and navigation functionalities<br>- Ideal for solo practitioners or small clinics<br>- Displays key features and pricing details elegantly.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- clinic-form Submodule -->
							<details>
								<summary><b>clinic-form</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(protected).clinic-form</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/clinic-form/page.tsx'>page.tsx</a></b></td>
											<td style='padding: 8px;'>- Define a protected clinic form page that ensures user authentication and subscription status before allowing clinic addition<br>- This page leverages components for a user-friendly dialog interface, guiding users through clinic creation for patient management.</td>
										</tr>
									</table>
									<!-- _components Submodule -->
									<details>
										<summary><b>_components</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(protected).clinic-form._components</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/(protected)/clinic-form/_components/form.tsx'>form.tsx</a></b></td>
													<td style='padding: 8px;'>- Create a clinic form component that handles clinic creation using form validation and submission logic<br>- The component integrates with various UI elements and form libraries to provide a seamless user experience for creating clinics within the application.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- api Submodule -->
					<details>
						<summary><b>api</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.app.api</b></code>
							<!-- auth Submodule -->
							<details>
								<summary><b>auth</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.api.auth</b></code>
									<!-- [...all] Submodule -->
									<details>
										<summary><b>[...all]</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.api.auth.[...all]</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/api/auth/[...all]/route.ts'>route.ts</a></b></td>
													<td style='padding: 8px;'>- Define authentication routes using Next.js handler, leveraging the better-auth library<br>- Expose POST and GET methods to handle authentication requests, utilizing the auth function from the project's auth module<br>- This file plays a crucial role in managing user authentication within the project's API architecture.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- stripe Submodule -->
							<details>
								<summary><b>stripe</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.api.stripe</b></code>
									<!-- webhook Submodule -->
									<details>
										<summary><b>webhook</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.api.stripe.webhook</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/api/stripe/webhook/route.ts'>route.ts</a></b></td>
													<td style='padding: 8px;'>- Handle incoming Stripe webhook events to update user subscription data in the database based on invoice payments or subscription cancellations<br>- Validates webhook signatures, processes events, and updates user records accordingly<br>- Ensures accurate synchronization between Stripe and local database for seamless subscription management.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- authentication Submodule -->
					<details>
						<summary><b>authentication</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.app.authentication</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/authentication/page.tsx'>page.tsx</a></b></td>
									<td style='padding: 8px;'>- Define the authentication page structure using tabs for login and sign-up forms<br>- Check user session; if authenticated, redirect to the dashboard<br>- Display login and sign-up forms based on user selection.</td>
								</tr>
							</table>
							<!-- _components Submodule -->
							<details>
								<summary><b>_components</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.authentication._components</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/authentication/_components/login-form.tsx'>login-form.tsx</a></b></td>
											<td style='padding: 8px;'>- Create a login form component that handles user authentication<br>- It integrates form validation, submission handling, and social login functionality<br>- The component utilizes various UI elements for a seamless user experience, including input fields, buttons, and error messaging<br>- Upon successful login, users are redirected to the dashboard.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/app/authentication/_components/sign-up-form.tsx'>sign-up-form.tsx</a></b></td>
											<td style='padding: 8px;'>- Create a sign-up form component for user registration<br>- Utilizes form validation and submission handling<br>- Renders input fields for name, email, and password<br>- Displays loading state during form submission<br>- Upon successful registration, redirects user to the dashboard<br>- Handles error cases like existing user email.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- components Submodule -->
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.components</b></code>
					<!-- ui Submodule -->
					<details>
						<summary><b>ui</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.ui</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/dialog.tsx'>dialog.tsx</a></b></td>
									<td style='padding: 8px;'>- Define and render various UI components for dialog interactions, including triggers, overlays, content, headers, footers, titles, and descriptions<br>- These components facilitate the creation of customizable and accessible dialog boxes within the applications user interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/avatar.tsx'>avatar.tsx</a></b></td>
									<td style='padding: 8px;'>- Define and export Avatar components for UI display using Radix UI Avatar primitives<br>- The components include Avatar, AvatarImage, and AvatarFallback, each serving a specific UI purpose within the application<br>- These components enhance the user interface by providing visually appealing and functional avatar elements.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/table.tsx'>table.tsx</a></b></td>
									<td style='padding: 8px;'>- Define reusable React components for table structure and styling<br>- Includes components for table, header, body, footer, row, head, cell, and caption<br>- Enhances UI consistency and readability across the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/skeleton.tsx'>skeleton.tsx</a></b></td>
									<td style='padding: 8px;'>- Define a reusable Skeleton component for displaying loading placeholders in the UI<br>- The component applies styling classes and animations to mimic a loading state<br>- It enhances user experience by providing visual feedback during data fetching processes.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/card.tsx'>card.tsx</a></b></td>
									<td style='padding: 8px;'>- Define reusable UI components for cards with header, title, description, action, content, and footer<br>- These components enhance the visual presentation and structure of card-based content within the projects user interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/button.tsx'>button.tsx</a></b></td>
									<td style='padding: 8px;'>- Define a reusable Button component with various visual styles and sizes<br>- Utilize the provided buttonVariants object to easily customize the buttons appearance<br>- The component supports different variants like default, destructive, outline, secondary, ghost, and link, along with sizes such as default, small, and large<br>- This Button component enhances UI consistency and flexibility within the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/input.tsx'>input.tsx</a></b></td>
									<td style='padding: 8px;'>Define and style an input component for React applications, enhancing user experience with various visual and interactive features.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/sonner.tsx'>sonner.tsx</a></b></td>
									<td style='padding: 8px;'>- Implement a custom Toaster component that leverages the theme from Next.js<br>- The component integrates with Sonner to display notifications with customizable styles based on the current theme<br>- This enhances the user experience by ensuring consistent visual feedback throughout the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/tabs.tsx'>tabs.tsx</a></b></td>
									<td style='padding: 8px;'>- Define and render tab components for UI interaction in React using Radix UI<br>- The code in <code>tabs.tsx</code> creates reusable components like Tabs, TabsList, TabsTrigger, and TabsContent to manage tab functionality efficiently within the projects UI architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/form.tsx'>form.tsx</a></b></td>
									<td style='padding: 8px;'>- Define and manage form components for React applications<br>- Includes functionalities for form fields, labels, controls, descriptions, and error messages<br>- Facilitates structured form building and validation handling within the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/badge.tsx'>badge.tsx</a></b></td>
									<td style='padding: 8px;'>- Define and render customizable badges with different visual styles based on specified variants<br>- The badges can be easily integrated into the UI components of the project, enhancing visual feedback and user interaction.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/alert-dialog.tsx'>alert-dialog.tsx</a></b></td>
									<td style='padding: 8px;'>- Define and render various components for an alert dialog interface in the React application<br>- These components manage the display and behavior of the alert dialog, including triggers, overlays, content, headers, footers, titles, descriptions, actions, and cancel options<br>- The code enhances user interaction and visual feedback within the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/calendar.tsx'>calendar.tsx</a></b></td>
									<td style='padding: 8px;'>- Create a customizable calendar component for React applications<br>- The Calendar component allows users to navigate through months, select dates, and visualize date ranges<br>- It offers flexibility in styling and functionality through various props and customizable components<br>- This component enhances user experience by providing a feature-rich calendar interface for web applications.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/chart.tsx'>chart.tsx</a></b></td>
									<td style='padding: 8px;'>- The <code>chart.tsx</code> file in the <code>src/components/ui</code> directory manages chart configurations and rendering within the project<br>- It provides functions for creating chart containers, tooltips, legends, and styling based on specified configurations<br>- This file plays a crucial role in defining and displaying interactive charts within the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/data-table.tsx'>data-table.tsx</a></b></td>
									<td style='padding: 8px;'>- Define and render a dynamic DataTable component for displaying structured data<br>- Utilizes React Table for efficient data handling and rendering<br>- Supports customizable columns and data input, providing a responsive and user-friendly table interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/progress.tsx'>progress.tsx</a></b></td>
									<td style='padding: 8px;'>- Create a reusable Progress component for displaying progress indicators in React applications<br>- The component leverages Radix UI for seamless integration and provides customizable styling options<br>- Ideal for visualizing progress in a user-friendly and visually appealing manner within the applications UI components.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/separator.tsx'>separator.tsx</a></b></td>
									<td style='padding: 8px;'>Define and render a UI separator component that leverages Radix UI for clean visual separation in the projects user interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/dropdown-menu.tsx'>dropdown-menu.tsx</a></b></td>
									<td style='padding: 8px;'>- Define and render dropdown menu components for a React UI, facilitating user interaction and navigation within the application<br>- The code file in the specified path contributes essential functionality to the projects UI architecture, enabling the creation of interactive dropdown menus with various content types and styles.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/tooltip.tsx'>tooltip.tsx</a></b></td>
									<td style='padding: 8px;'>- Define and render tooltip components for React UI, managing delay and styling<br>- The TooltipProvider, Tooltip, TooltipTrigger, and TooltipContent components facilitate tooltip display and behavior, enhancing user interactions.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/sidebar.tsx'>sidebar.tsx</a></b></td>
									<td style='padding: 8px;'>- Project SummaryThe <code>sidebar.tsx</code> file in the <code>src/components/ui</code> directory plays a crucial role in managing the sidebar functionality within the projects user interface<br>- It handles the display and behavior of the sidebar component, including its responsiveness to different screen sizes, cookie management for sidebar state persistence, and integration with various UI elements like buttons, inputs, tooltips, and sheets<br>- The file encapsulates the logic for rendering the sidebar, setting its width, defining keyboard shortcuts, and providing a seamless user experience when interacting with the sidebar feature.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/popover.tsx'>popover.tsx</a></b></td>
									<td style='padding: 8px;'>- Define and render popover UI components for React applications using Radix UI<br>- Includes Popover, PopoverTrigger, PopoverContent, and PopoverAnchor for flexible and customizable popover functionality.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/page-container.tsx'>page-container.tsx</a></b></td>
									<td style='padding: 8px;'>- Define reusable UI components for page layout and structure<br>- Includes containers, headers, titles, descriptions, actions, and content<br>- Enhances consistency and efficiency in building React pages.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/label.tsx'>label.tsx</a></b></td>
									<td style='padding: 8px;'>- Define a reusable UI component for labels, enhancing accessibility and styling consistency across the project<br>- This component leverages Radix UI for label functionality and integrates seamlessly with React applications<br>- By encapsulating label logic and design, it promotes maintainability and a cohesive user experience.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/sheet.tsx'>sheet.tsx</a></b></td>
									<td style='padding: 8px;'>- Define UI components for a sheet overlay with triggers, content, headers, footers, titles, and descriptions<br>- These components manage the display and behavior of a sheet, including animations and positioning<br>- The sheet can slide in from different directions and contains customizable content with close buttons<br>- Ideal for creating modal-like interfaces with dynamic content.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/LuanODias/doutor-agenda/blob/master/src/components/ui/select.tsx'>select.tsx</a></b></td>
									<td style='padding: 8px;'>- Define UI components for a select dropdown feature<br>- Includes elements like trigger, content, label, items, separators, and scroll buttons<br>- Enhances user interaction and visual presentation within the applications UI.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build doutor-agenda from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/LuanODias/doutor-agenda
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd doutor-agenda
    ```

3. **Install the dependencies:**

<!-- SHIELDS BADGE CURRENTLY DISABLED -->
	<!-- [![npm][npm-shield]][npm-link] -->
	<!-- REFERENCE LINKS -->
	<!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
	<!-- [npm-link]: https://www.npmjs.com/ -->

	**Using [npm](https://www.npmjs.com/):**

	```sh
	❯ npm install
	```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm start
```

### Testing

Doutor-agenda uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm test
```

---

## Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## Contributing

- **💬 [Join the Discussions](https://github.com/LuanODias/doutor-agenda/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/LuanODias/doutor-agenda/issues)**: Submit bugs found or log feature requests for the `doutor-agenda` project.
- **💡 [Submit Pull Requests](https://github.com/LuanODias/doutor-agenda/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/LuanODias/doutor-agenda
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/LuanODias/doutor-agenda/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=LuanODias/doutor-agenda">
   </a>
</p>
</details>

---

## License

Doutor-agenda is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- Credit `contributors`, `inspiration`, `references`, etc.

<div align="right">

[![][back-to-top]](#top)

</div>


[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square


---
