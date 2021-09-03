# React jvectormap

## About

A simple wrapper for [jvectormap](http://jvectormap.com/)

Please feel free to contribute, open issues or just enjoy this library!

## Gettings started

Install the library:

    npm install --save react-jvectormap

Include the jvectormap.css file in your project:

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css" type="text/css" media="screen"/>


## Example usage
            <div style={{width: 500, height: 500}}>
                <VectorMap map={'us_aea'}
                           backgroundColor="#3b96ce"
                           ref="map"
                           containerStyle={{
                               width: '100%',
                               height: '100%'
                           }}
                           containerClassName="map"
                />
            </div>

Will result the following map:

<p align="center">
  <img src="https://github.com/kadoshms/react-jvectormap/raw/master/example.png" width="500" height="500" />
</p>


## Supported props:

All the [Map](http://jvectormap.com/documentation/javascript-api/jvm-map/) properties are supported as props.

Please note that `map` is a required prop, and must be one of the [supported maps](#maps);

In addition, the plugin currently supports the following props:

| prop               | type   | required | description                                  |
|--------------------|--------|----------|----------------------------------------------|
| containerStyle     | object | no       | an inline style object for the map container |
| containerClassName | string | no       | a class name for the map container           |

## Ref methods

You can allways add a `ref` to your VectorMap and access the following methods (more will be added in the future or upon request):

| method                                                                                              | params         | return type |
|-----------------------------------------------------------------------------------------------------|----------------|-------------|
| **setBackgroundColor** <br /> programmatically change the map background color                             | color - string | -           |
| **getMapObject** <br /> get the jvectormap object for additional options and methods (see jvectormap docs) | -              | object      |

## Supported Maps

* world_mill
* us_aea
* europe_mill
* continents_mill
* ch_mill
* oceania_mill
* africa_mill
* asia_mill
* north_america_mill
* south_america_mill
* ca_lcc
* brazil
* se_mill
* es_mill
* vietnam
* indonesia
* th_mill
* de_mill
* ar_mill
* au_mill
* kr_mill
* co_mill

**Please feel free to request new maps! just open an issue!**
