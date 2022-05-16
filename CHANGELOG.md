# Change Log

## [2.0.2] 2022-05-16

### Update v2.0.2

- The problem with npm install/ building the project was fixed.

### Updated dependencies

```
chakra-ui/icons                      1.0.14         →         1.1.5
chakra-ui/react                      1.6.5          →         1.8.8
chakra-ui/theme-tools                1.1.9          →         1.3.6
```

### Added dependencies

```
chakra-ui/system                      1.12.1
```

## [2.0.1] 2022-03-20

### Update v2.0.1

- The problem with npm install/ building the project was solved. Until the plugins we used are updated for React v17.0.2 we are reverting to 16.14.0 for the moment.

### Updated dependencies

```
react                                17.0.2         →         16.14.0
react-datetime                       3.0.4          →         3.1.1
react-dom                            17.0.2         →         16.14.0
react-router-dom                     6.2.1          →         5.2.1
react-swipeable-views                0.13.9         →         0.14.0
stylis-plugin-rtl                    2.1.0          →         2.1.1
```

## [2.0.0] 2022-03-09

### Update v2.0.0

### Added components

- Each page now has a folder of its own, containing `index.js` (for the page itself) and a folder in which all cards have been made as a separate component which take props.
- Added sidebar content which is used for both the standard sidebar and the responsive sidebar drawer.
- Inside `Sidebar` folder in `components`, there is `index.js`, which is the actual sidebar, and `SidebarResponsive.js` which is a button that opens the sidebar drawer.

### Updated dependencies

```
@emotion/cache                       11.4.0         →         11.7.1
@emotion/react                       11.4.1         →         11.8.1
@emotion/styled                      11.3.0         →         11.8.1
react-router-dom                     5.2.0          →         6.2.1
stylis                               4.0.10         →         4.0.13
```

### Warning

There is a warnings related to the stylis-plugin-rtl dependency that won't affect on the behavior of the product its something with the library itself.

## [1.0.2] 2021-09-13

### Update v1.0.2

### Bug fixing

- Removed console errors

### Updated dependencies

```
node-sass                            5.0.0          →         7.0.1
react-scripts                        4.0.3          →         5.0.0
```

## [1.0.1] 2021-09-13

### Update v1.0.1

- Added RTL Page

### Added dependencies

```
@emotion/cache                                                11.4.0
react-github-btn                                              1.2.1
```

### Updated dependencies

```
stylis                               4.0.10         →         4.0.13
stylis-plugin-rtl                    2.1.0          →         2.1.14
```

## [1.0.0] 2021-08-20

### Original Release

- Added Chakra UI as base framework
