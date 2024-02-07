<!-- Available h3 headings: Added, Fixed, Updated, Removed, Deprecated -->

# Changelog

All notable changes to this template will be documented in this file.

## v3.1.0 (2024-02-07)

### Added

- Added 6 Demo Configs
- Added comments in pages
- Added `settingsCookieName` in theme config
- Added demoConfigs file in configs folder
- Added `modeStorageKey` prop to MUI's CssVarsProvider

### Updated

- Updated docs
- Updated packages
- Updated Customizer
- Updated settingsContext
- Updated file path form `src/@core/server/actions` to `src/@core/utils/serverHelpers`
- Updated the functions in the `serverHelpers` file
- Updated file name from `get-dictionary.ts` to `getDictionary.ts`
- Updated file name from `get-initials` file to `getInitials`
- Updated links by using `getLocalizedUrl` function and updated links in the whole template accordingly
- Updated Prisma Scheme to run on multiple platforms like Vercel
- Defined home page URL and also handled redirections with localization in the middleware file
- Updated IDs in the template search data
- Updated Login file's component name

### Fixed

- Fixed all broken links in menu and search
- Fixed `semi-dark` layout for demos
- Fixed import paths for `serverHelpers` file
- Fixed popout overflow issue in the Calendar app
- Fixed collapsed layout by moving the `useEffect` from the customzier to `src/components/layout/vertical/Navigation.tsx` file

### Removed

- Removed `-react` from all of our links
- Removed trailing slash from all the links
- Removed unnecessary util from settings context
- Removed `getSettingsFromCookie` usage from the `src/app/[lang]/(dashboard)/layout.tsx` file
- Removed root `page.tsx` file from the `full-version` which was used to handle redirection
- Removed `localizeUrl` function form the `src/components/GenerateMenu.tsx` file and used `getLocalizedUrl` function instead

## v3.0.0 (2024-01-18)

### Added

- Added Next.js `app` router

### Removed

- Next.js `pages` router is removed but will be supported for 6 months

## v2.2.0 (2023-05-10)

### Added

- Added `.gitattributes` file
- Added default color for the Floating Action Button (FAB) component

### Updated

- Updated docs
- Updated all the packages
- Updated input type & placeholder in phone number fields on the Form Layout page

### Fixed

- Fixed minor bugs in Email, Chat, Calendar, Invoice apps
- Fixed minor bugs in Slider, Snackbar, Datepicker components
- Fixed Name column toggle in the Column example on the DataGrid page

### Removed

- Removed unnecessary vscode extensions
- Removed the basic example from the Textarea component page
- Removed link to MUI's Progress from More components page as it is shown in the separate page

## v2.1.0 (2023-03-02)

### Added

- Added Progress component page
- Added necessary props for the UserLayout
- Added custom variable `avatarBg` for Avatar background-color in the MUI's palette
- Added articles on how to migrate from JWT Auth to [NextAuth](https://next-auth.js.org/), NextAuth with [CredentialsProvider](https://next-auth.js.org/configuration/providers/credentials) and NextAuth with [GoogleProvider](https://next-auth.js.org/providers/google) & [PrismaAdapter](https://next-auth.js.org/adapters/prisma)

### Updated

- Updated docs
- Updated all the packages
- Changed MUI Links to Next.js Links
- Updated examples on the Dialog pages
- Changed method of implementing semi-dark skin
- Updated MUI's theme structure which is in the `src/@core` folder
- Update `lang` attribute on the `<html>` tag when the language is changed
- Updated UI of avatar, breadcrumb, chip, dataGrid, list, tooltip, snackbar components

### Fixed

- Fixed types
- Fixed vertical menu re-renders on hover
- Fixed transition issue on pull-up Avatars
- Fixed spacing in vertical and horizontal navigation menus
- Fixed Toast's z-index when its position is on the left side
- Fixed shadow between nav header and nav items in the Vertical navigation menu in RTL
- Fixed bugs in the Calendar, Invoice, User apps and User Profile, FAQ, File Uploader pages

### Removed

- Removed unnecessary images
- Removed validation on the Register page
- Removed all the files and guides related to Firebase (in favour of NextAuth)

## v2.0.0 (2022-11-02)

### Added

- Added Iconify icons
- Added npm and nvm config files
- Added real-life Form Wizard examples
- Added User Profile and Help Center pages
- Added a custom component to use Iconify icons
- Added shortcut dropdown in the Navbar (AppBar)
- Added rounded variant for the `Chip` component
- Added new examples on the `List` component page
- Added pull-up variant for the `Avatar` component
- Added functionality to 'Remember Me' while logging in
- Added options to override styling and props on the layout
- Added a utility function to convert an RGBA color to a Hex color
- Added functionality to log out and refresh the token on expiration
- Added a custom component to open a menu on an `IconButton` component
- Added custom components for radios and checkboxes with different variants
- Added authentication pages viz. Verify Email, Two Steps and Multi Step Register

### Updated

- Updated docs
- Updated footer styles
- Updated Next.js to v13
- Optimized all the images
- Updated colors in all the charts
- Moved JWT configs to the `.env` file
- Updated `semi-dark` from `skin` to `mode`
- Updated all the dependencies to the latest versions
- Updated color opacities according to the MUI's Theme
- Updated Account Settings, Pricing, FAQ pages and User app
- Updated the variant of the Notification badge in the Navbar (AppBar)
- Updated `fallback` to `false` in the `getStaticPaths` method on all dynamic pages

### Fixed

- Fixed minor bugs
- Fixed `react-datepicker` styling
- Fixed styles of Accordion component
- Fixed the search dialog's unexpected behavior
- Fixed popper-placement of react-datepicker in RTL
- Fixed z-index of `react-hot-toast` in smaller screens
- Fixed third-level menu and undefined links in the Horizontal navigation menu
- Fixed a few re-renders in the Vertical navigation menu and in the Vertical layout
- Fixed content area scroll issue due to spinner when a user logs in for the first time
- Fixed Email and Chat apps' height by adding the `contentHeightFixed` method on the page component
- Fixed border-radius & spacing issues in Table & DataGrid and overriding row height issue in DataGrid

### Removed

- Removed Knowledge Base page
- Removed validations from some pages
- Removed portal of `react-datepicker`
- Removed all the examples of MUI's pickers
- Removed Material Design Icons (by Community)
- Removed documentation of Auth0 and AWS Amplify
- Removed download functionality from the Invoice Preview page

## v1.4.0 (2022-05-27)

### Added

- Added swiper page
- Added Auth integration articles for Firebase, Auth0 and AWS Amplify
- Added an option to fix the position of the content before and after the vertical navigation

### Updated

- Updated docs
- Updated to React 18
- Updated the UI of the search
- Updated dependencies to the latest version
- Updated some spacing in the vertical navigation
- Updated shadow below Vertical Navigation Header and above Vertical Navigation

### Fixed

- Fixed the build errors
- Fixed invoice print preview
- Fixed ACL visibility of sub to sub menu group
- Fixed images in auth v2 pages for bordered layout
- Fixed collapsed vertical navigation on smaller screens
- Fixed dropdowns' (menus') position and width of all columns in all DataGrids
- Fixed active menu group when vertical navigation is collapsed from the customizer

## v1.3.0 (2022-04-21)

### Added

- Added all color examples of Fab buttons
- Added a feature to search in the content of any mail in the Email app

### Updated

- Updated docs
- Updated folder structure and types
- Updated custom Chip component
- Updated icon size example in Buttons
- Updated all the avatars in Badges

### Fixed

- Fixed `yarn build` and `yarn export` in the template
- Fixed grey color variant styling of Timeline Dot

## v1.2.0 (2022-03-30)

### Updated

- Updated docs
- Updated readme file
- Updated AppBar

### Fixed

- Fixed ACL types so that there are no errors in the `src/@core` folder
- Fixed Horizontal menu click on menu group when `horizontalMenuToggle`'s value is `hover`
- Fixed heights of menu group and sub-menu group in the Horizontal menu
- Fixed scrolling of email log when any action happens in the email log in the Email app
- Removed actions when any email is selected and then unstar all emails in the Email app
- Improve UX so that there is no confusion between Chats and Contacts sections in the Chat app
- Fixed Scatter Apexcharts
- Fixed favicon file paths

## v1.1.0 (2022-03-09)

### Added

- Add animation in horizontal menu group

### Updated

- Updated docs
- Updated Email, Invoice and User apps
- Updated Knowledge Base pages

### Removed

- Removed locales folder from starter-kit

## v1.0.0 (2022-03-03)

### Added

- Initial Release
