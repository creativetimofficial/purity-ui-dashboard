import React from 'react';
import './VectorMap.scss';
import PropTypes from 'prop-types';
import maps from './../maps';

const $ = window.jQuery;

class VectorMap extends React.PureComponent {

    constructor(props) {
        super(props);

        this.$node = null;
        this.$mapObject = null;
    }
    /**
     * load required map
     */
    componentWillMount() {
        const { map } = this.props;

        if (map && maps.indexOf(map) !== -1) {
            require(`./../maps/${map}`);
        } else {
            throw new Error(`No such map, please select one of the following: ${maps.join()}`);
        }
    }

    /**
     * generate the map
     */
    componentDidMount() {
        const { map } = this.props;

        this.$node = $(this.refs.map);

        if (map) {
            this.$node.vectorMap({...this.props});
            this.$mapObject = this.$node.vectorMap('get', 'mapObject');
        }
    }

    /**
     * re-render map with props change
     */
    componentDidUpdate() {
        const { map } = this.props;

        this.$node = $(this.refs.map);
        this.$node.empty(); // remove old one

        if (map) {
            this.$node.vectorMap({ ...this.props });
            this.$mapObject = this.$node.vectorMap("get", "mapObject");
        }
    }

    /**
     * set map background color
     * @param color
     */
    setBackgroundColor(color) {
        this.$mapObject.setBackgroundColor(color)
    }

    /**
     * get jvector map object
     * @returns {null|*}
     */
    getMapObject() {
        return this.$mapObject;
    }

    render() {

        const props = {};
        const { containerStyle, containerClassName } = this.props;

        // append inline style if exists
        if (containerStyle) {
            props.style = containerStyle;
        }

        // append class if exists
        if (containerClassName) {
            props.className = containerClassName;
        }

        return (
            <div ref="map" {...props} />
        );
    }
}

VectorMap.propTypes = {
    containerStyle: PropTypes.object,
    containerClassName: PropTypes.string,
    map: PropTypes.oneOf(maps).isRequired,
    backgroundColor: PropTypes.string,
    zoomOnScroll: PropTypes.bool,
    zoomOnScrollSpeed: PropTypes.bool,
    panOnDrag: PropTypes.bool,
    zoomMax: PropTypes.number,
    zoomMin: PropTypes.number,
    zoomStep: PropTypes.number,
    zoomAnimate: PropTypes.bool,
    regionsSelectable: PropTypes.bool,
    regionsSelectableOne: PropTypes.bool,
    markersSelectable: PropTypes.bool,
    markersSelectableOne: PropTypes.bool,
    regionStyle: PropTypes.object,
    regionLabelStyle: PropTypes.object,
    markerStyle: PropTypes.object,
    markerLabelStyle: PropTypes.object,
    markers: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    series: PropTypes.object,
    focusOn: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    labels: PropTypes.object,
    selectedRegions: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ]),
    selectedMarkers: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ]),
    onRegionTipShow: PropTypes.func,
    onRegionOver: PropTypes.func,
    onRegionOut: PropTypes.func,
    onRegionClick: PropTypes.func,
    onRegionSelected: PropTypes.func,
    onMarkerTipShow: PropTypes.func,
    onMarkerOver: PropTypes.func,
    onMarkerOut: PropTypes.func,
    onMarkerClick: PropTypes.func,
    onMarkerSelected: PropTypes.func,
    onViewportChange: PropTypes.func,
    zoomButtons: PropTypes.bool
};

export default VectorMap;
