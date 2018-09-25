// test to make sure the link to this script is working
// console.log("selectFeature.js is connected");


// -----------------------------------------------------
// MAKE A FUNCTION THAT CREATES A STRING LITERAL, OR JUST jQUERY HTML CONSTRUCTOR,
// TO CREATE THE <select> AND <option>s, USING THE DATA IN THE ARRAY BELOW FOR EACH OPTION
// -----------------------------------------------------


// NEED CODE THAT CREATES A SELECT BUTTON THAT LOOKS LIKE THIS:

/* 
<select name="feature" class="custom-select" id="feature_options">
    <option value="" selected>select a feature:</option>
    <option value="RSRT">resort</option>
    <option value="SPA">spa</option>
    <option value="BAY">bay</option>
    <option value="FT">fort</option>
    <option value="CTRS">space center</option>
    <option value="CTRR">religious center</option>
    <option value="PAL">palace</option>
    <option value="PGDA">pagoda</option>
    <option value="CNYN">canyon</option>
    <option value="MESU">mesa</option>
</select>
*/

// and .append the above <select> to: <div id="feature_input" class="input-group"></div>





// -----------------------------------------------------
// CREATE AN ARRAY WITH OBJECTS THAT HAVE { name: "feature name", value: "CODE" }
// OF EACH OF THE 645 SEARCHABLE FEATURE CODES.
// EACH FEATURE NAME/CODE OBJECT WILL BE AN <option> IN THE <select> ABOVE
// THIS WILL NEED A FOR LOOP, OR MAYBE USE THE .forEach ARRAY METHOD INSTEAD OF A FOR LOOP?
// -----------------------------------------------------

var featureArray = [

    {
        // H.AIRS	seaplane landing area	a place on a waterbody where floatplanes land and take off
        name: "seaplane landing area",
        value: "AIRS",
    },
    {
        // H.ANCH	anchorage	an area where vessels may anchor
        name: "anchorage",
        value: "ANCH",
    },
    {
        // H.BAY	bay	a coastal indentation between two capes or headlands, larger than a cove but smaller than a gulf
        name: "bay",
        value: "BAY",
    },
    {
        name: "bays",
        value: "BAYS",
    },
    {
        name: "bright",
        value: "BGHT",
    },
    {
        name: "bank",
        value: "BNK",
    },
    {
        name: "stream bank",
        value: "BNKR",
    },
    {
        name: "stream bank",
        value: "BNKR",
    },{
        name: "section bank",
        value: "BNKX",
    },
    {
        name: "bog",
        value: "BOG",
    },
    {
        name: "icecap",
        value: "CAPG",
    },
    {
        name: "channel",
        value: "CHN",
    },
    {
        name: "lake channel",
        value: "CHNL",
    },
    {
        name: "marine channel",
        value: "CHNM",
    },
    {
        name: "navigation channel",
        value: "CHNN",
    },
    {
        name: "confluence",
        value: "CNFL",
    },
    {
        name: "canal",
        value: "CNL",
    },
    {
        name: "aqueduct",
        value: "CNLA",
    },
    {
        name: "canal bend",
        value: "CNLB",
    },
    {
        name: "drainage canal",
        value: "CNLD",
    },
    {
        name: "irrigation canal",
        value: "CNLI",
    },
    {
        name: "navigation canals",
        value: "CNLN",
    },
// TURN THIS DATA INTO A JAVASCRIPT ARRAY OF OBJECTS, WHICH WILL THEN BUILD ALL THE <option></option> ELEMENTS
// FOR THE <select> FIELD.

// FOR THE value="" NAME, IGNORE THE FIRST LETTER AND ., JUST USE REST OF CODE AFTER THE DOT,
// SO FOR "H.AIRS", IT WOULD BE value: "AIRS"
// FOR THE OPTION'S TEXT, JUST USE THE FIRST WORD OR WORDS (THE NAME OF THE THING), IGNORE REST OF DESCRIPTION

// H.AIRS	seaplane landing area	a place on a waterbody where floatplanes land and take off
// H.ANCH	anchorage	an area where vessels may anchor
// H.BAY	bay	a coastal indentation between two capes or headlands, larger than a cove but smaller than a gulf
// H.BAYS	bays	coastal indentations between two capes or headlands, larger than a cove but smaller than a gulf
// H.BGHT	bight(s)	an open body of water forming a slight recession in a coastline
// H.BNK	bank(s)	an elevation, typically located on a shelf, over which the depth of water is relatively shallow but sufficient for most surface navigation
// H.BNKR	stream bank	a sloping margin of a stream channel which normally confines the stream to its channel on land
// H.BNKX	section of bank	
// H.BOG	bog(s)	a wetland characterized by peat forming sphagnum moss, sedge, and other acid-water plants
// H.CAPG	icecap	a dome-shaped mass of glacial ice covering an area of mountain summits or other high lands; smaller than an ice sheet
// H.CHN	channel	the deepest part of a stream, bay, lagoon, or strait, through which the main current flows
// H.CHNL	lake channel(s)	that part of a lake having water deep enough for navigation between islands, shoals, etc.
// H.CHNM	marine channel	that part of a body of water deep enough for navigation through an area otherwise not suitable
// H.CHNN	navigation channel	a buoyed channel of sufficient depth for the safe navigation of vessels
// H.CNFL	confluence	a place where two or more streams or intermittent streams flow together
// H.CNL	canal	an artificial watercourse
// H.CNLA	aqueduct	a conduit used to carry water
// H.CNLB	canal bend	a conspicuously curved or bent section of a canal
// H.CNLD	drainage canal	an artificial waterway carrying water away from a wetland or from drainage ditches
// H.CNLI	irrigation canal	a canal which serves as a main conduit for irrigation water
// H.CNLN	navigation canal(s)	a watercourse constructed for navigation of vessels
// H.CNLQ	abandoned canal	
// H.CNLSB	underground irrigation canal(s)	a gently inclined underground tunnel bringing water for irrigation from aquifers
// H.CNLX	section of canal	
// H.COVE	cove(s)	a small coastal indentation, smaller than a bay
{
    name: "coves",
    value: "COVE",
},
// H.CRKT	tidal creek(s)	a meandering channel in a coastal wetland subject to bi-directional tidal currents
{
    name: "tidal creeks",
    value: "CRKT",
},
// H.CRNT	current	a horizontal flow of water in a given direction with uniform velocity
// H.CUTF	cutoff	a channel formed as a result of a stream cutting through a meander neck
// H.DCK	dock(s)	a waterway between two piers, or cut into the land for the berthing of ships
{
    name: "docks",
    value: "DCK",
},
// H.DCKB	docking basin	a part of a harbor where ships dock
// H.DOMG	icecap dome	a comparatively elevated area on an icecap
{
    name: "icecap dome",
    value: "DOMG",
},
// H.DPRG	icecap depression	a comparatively depressed area on an icecap
// H.DTCH	ditch	a small artificial watercourse dug for draining or irrigating the land
{
    name: "ditch",
    value: "DTCH",
},
// H.DTCHD	drainage ditch	a ditch which serves to drain the land
// H.DTCHI	irrigation ditch	a ditch which serves to distribute irrigation water
// H.DTCHM	ditch mouth(s)	an area where a drainage ditch enters a lagoon, lake or bay
// H.ESTY	estuary	a funnel-shaped stream mouth or embayment where fresh water mixes with sea water under tidal influences
// H.FISH	fishing area	a fishing ground, bank or area where fishermen go to catch fish
{
    name: "fishing area",
    value: "FISH",
},
// H.FJD	fjord	a long, narrow, steep-walled, deep-water arm of the sea at high latitudes, usually along mountainous coasts
// H.FJDS	fjords	long, narrow, steep-walled, deep-water arms of the sea at high latitudes, usually along mountainous coasts
// H.FLLS	waterfall(s)	a perpendicular or very steep descent of the water of a stream
{
    name: "waterfalls",
    value: "FLLS",
},
// H.FLLSX	section of waterfall(s)	
// H.FLTM	mud flat(s)	a relatively level area of mud either between high and low tide lines, or subject to flooding
// H.FLTT	tidal flat(s)	a large flat area of mud or sand attached to the shore and alternately covered and uncovered by the tide
// H.GLCR	glacier(s)	a mass of ice, usually at high latitudes or high elevations, with sufficient thickness to flow away from the source area in lobes, tongues, or masses
{
    name: "glaciers",
    value: "GLCR",
},
// H.GULF	gulf	a large recess in the coastline, larger than a bay
{
    name: "gulf",
    value: "GULF",
},
// H.GYSR	geyser	a type of hot spring with intermittent eruptions of jets of hot water and steam
{
    name: "geyser",
    value: "GYSR",
},
// H.HBR	harbor(s)	a haven or space of deep water so sheltered by the adjacent land as to afford a safe anchorage for ships
{
    name: "harbor",
    value: "HBR",
},
// H.HBRX	section of harbor	
// H.INLT	inlet	a narrow waterway extending into the land, or connecting a bay or lagoon with a larger body of water
// H.INLTQ	former inlet	an inlet which has been filled in, or blocked by deposits
// H.LBED	lake bed(s)	a dried up or drained area of a former lake
// H.LGN	lagoon	a shallow coastal waterbody, completely or partly separated from a larger body of water by a barrier island, coral reef or other depositional feature
{
    name: "lagoon",
    value: "LGN",
},
// H.LGNS	lagoons	shallow coastal waterbodies, completely or partly separated from a larger body of water by a barrier island, coral reef or other depositional feature
// H.LGNX	section of lagoon	
// H.LK	lake	a large inland body of standing water
{
    name: "lake",
    value: "LK",
},
// H.LKC	crater lake	a lake in a crater or caldera
// H.LKI	intermittent lake	
// H.LKN	salt lake	an inland body of salt water with no outlet
{
    name: "salt lake",
    value: "LKN",
},
// H.LKNI	intermittent salt lake	
// H.LKO	oxbow lake	a crescent-shaped lake commonly found adjacent to meandering streams
// H.LKOI	intermittent oxbow lake	
// H.LKS	lakes	large inland bodies of standing water
// H.LKSB	underground lake	a standing body of water in a cave
{
    name: "underground lake",
    value: "LKSB",
},
// H.LKSC	crater lakes	lakes in a crater or caldera
// H.LKSI	intermittent lakes	
// H.LKSN	salt lakes	inland bodies of salt water with no outlet
// H.LKSNI	intermittent salt lakes	
// H.LKX	section of lake	
{
    name: "lakes",
    value: "LKS",
},
// H.MFGN	salt evaporation ponds	diked salt ponds used in the production of solar evaporated salt
// H.MGV	mangrove swamp	a tropical tidal mud flat characterized by mangrove vegetation
// H.MOOR	moor(s)	an area of open ground overlaid with wet peaty soils
// H.MRSH	marsh(es)	a wetland dominated by grass-like vegetation
{
    name: "marsh",
    value: "MRSH",
},
// H.MRSHN	salt marsh	a flat area, subject to periodic salt water inundation, dominated by grassy salt-tolerant plants
// H.NRWS	narrows	a navigable narrow part of a bay, strait, river, etc.
// H.OCN	ocean	one of the major divisions of the vast expanse of salt water covering part of the earth
{
    name: "ocean",
    value: "OCN",
},
// H.OVF	overfalls	an area of breaking waves caused by the meeting of currents or by waves moving against the current
{
    name: "overfalls",
    value: "OVF",
},
// H.PND	pond	a small standing waterbody
// H.PNDI	intermittent pond	
// H.PNDN	salt pond	a small standing body of salt water often in a marsh or swamp, usually along a seacoast
// H.PNDNI	intermittent salt pond(s)	
// H.PNDS	ponds	small standing waterbodies
{
    name: "ponds",
    value: "PNDS",
},
// H.PNDSF	fishponds	ponds or enclosures in which fish are kept or raised
{
    name: "fishponds",
    value: "PNDSF",
},
// H.PNDSI	intermittent ponds	
// H.PNDSN	salt ponds	small standing bodies of salt water often in a marsh or swamp, usually along a seacoast
{
    name: "salt ponds",
    value: "PNDSN",
},
// H.POOL	pool(s)	a small and comparatively still, deep part of a larger body of water such as a stream or harbor; or a small body of standing water
// H.POOLI	intermittent pool	
// H.RCH	reach	a straight section of a navigable stream or channel between two bends
// H.RDGG	icecap ridge	a linear elevation on an icecap
{
    name: "icecap ridge",
    value: "RDGG",
},
// H.RDST	roadstead	an open anchorage affording less protection than a harbor
// H.RF	reef(s)	a surface-navigation hazard composed of consolidated material
// H.RFC	coral reef(s)	a surface-navigation hazard composed of coral
// H.RFX	section of reef	
// H.RPDS	rapids	a turbulent section of a stream associated with a steep, irregular stream bed
// H.RSV	reservoir(s)	an artificial pond or lake
// H.RSVI	intermittent reservoir	
// H.RSVT	water tank	a contained pool or tank of water at, below, or above ground level
// H.RVN	ravine(s)	a small, narrow, deep, steep-sided stream channel, smaller than a gorge
// H.SBKH	sabkha(s)	a salt flat or salt encrusted plain subject to periodic inundation from flooding or high tides
// H.SD	sound	a long arm of the sea forming a channel between the mainland and an island or islands; or connecting two larger bodies of water
// H.SEA	sea	a large body of salt water more or less confined by continuous land or chains of islands forming a subdivision of an ocean
// H.SHOL	shoal(s)	a surface-navigation hazard composed of unconsolidated material
// H.SILL	sill	the low part of an underwater gap or saddle separating basins, including a similar feature at the mouth of a fjord
// H.SPNG	spring(s)	a place where ground water flows naturally out of the ground
// H.SPNS	sulphur spring(s)	a place where sulphur ground water flows naturally out of the ground
// H.SPNT	hot spring(s)	a place where hot ground water flows naturally out of the ground
{
    name: "hot springs",
    value: "SPNT",
},
// H.STM	stream	a body of running water moving to a lower level in a channel on land
// H.STMA	anabranch	a diverging branch flowing out of a main stream and rejoining it downstream
// H.STMB	stream bend	a conspicuously curved or bent segment of a stream
// H.STMC	canalized stream	a stream that has been substantially ditched, diked, or straightened
// H.STMD	distributary(-ies)	a branch which flows away from the main stream, as in a delta or irrigation canal
{
    name: "distributary",
    value: "STMD",
},
// H.STMH	headwaters	the source and upper part of a stream, including the upper drainage basin
{
    name: "headwaters",
    value: "STMH",
},
// H.STMI	intermittent stream	
// H.STMIX	section of intermittent stream	
// H.STMM	stream mouth(s)	a place where a stream discharges into a lagoon, lake, or the sea
// H.STMQ	abandoned watercourse	a former stream or distributary no longer carrying flowing water, but still evident due to lakes, wetland, topographic or vegetation patterns
{
    name: "abondoned watercourse",
    value: "STMQ",
},
// H.STMS	streams	bodies of running water moving to a lower level in a channel on land
// H.STMSB	lost river	a surface stream that disappears into an underground channel, or dries up in an arid area
{
    name: "lost river",
    value: "STMSB",
},
// H.STMX	section of stream	
// H.STRT	strait	a relatively narrow waterway, usually narrower and less extensive than a sound, connecting two larger bodies of water
// H.SWMP	swamp	a wetland dominated by tree vegetation
{
    name: "swamp",
    value: "SWMP",
},
// H.SYSI	irrigation system	a network of ditches and one or more of the following elements: water supply, reservoir, canal, pump, well, drain, etc.
// H.TNLC	canal tunnel	a tunnel through which a canal passes
{
    name: "canal tunnel",
    value: "TNLC",
},
// H.WAD	wadi	a valley or ravine, bounded by relatively steep banks, which in the rainy season becomes a watercourse; found primarily in North Africa and the Middle East
{
    name: "wadi",
    value: "WAD",
},
// H.WADB	wadi bend	a conspicuously curved or bent segment of a wadi
// H.WADJ	wadi junction	a place where two or more wadies join
// H.WADM	wadi mouth	the lower terminus of a wadi where it widens into an adjoining floodplain, depression, or waterbody
// H.WADS	wadies	valleys or ravines, bounded by relatively steep banks, which in the rainy season become watercourses; found primarily in North Africa and the Middle East
// H.WADX	section of wadi	
// H.WHRL	whirlpool	a turbulent, rotating movement of water in a stream
{
    name: "whirlpool",
    value: "WHRL",
},
// H.WLL	well	a cylindrical hole, pit, or tunnel drilled or dug down to a depth from which water, oil, or gas can be pumped or brought to the surface
// H.WLLQ	abandoned well	
// H.WLLS	wells	cylindrical holes, pits, or tunnels drilled or dug down to a depth from which water, oil, or gas can be pumped or brought to the surface
// H.WTLD	wetland	an area subject to inundation, usually characterized by bog, marsh, or swamp vegetation
{
    name: "wetland",
    value: "WTLD",
},
// H.WTLDI	intermittent wetland
{
    name: "intermittent wetland",
    value: "WTLDI",
},	
// H.WTRC	watercourse	a natural, well-defined channel produced by flowing water, or an artificial channel designed to carry flowing water
// H.WTRH	waterhole(s)	a natural hole, hollow, or small depression that contains water, used by man and animals, especially in arid areas
// L.AGRC	agricultural colony	a tract of land set aside for agricultural settlement
// L.AMUS	amusement park	Amusement Park are theme parks, adventure parks offering entertainment, similar to funfairs but with a fix location
// L.AREA	area	a tract of land without homogeneous character or boundaries
// L.BSND	drainage basin	an area drained by a stream
// L.BSNP	petroleum basin	an area underlain by an oil-rich structural basin
// L.BTL	battlefield	a site of a land battle of historical importance
// L.CLG	clearing	an area in a forest with trees removed
// L.CMN	common	a park or pasture for community use
// L.CNS	concession area	a lease of land by a government for economic development, e.g., mining, forestry
// L.COLF	coalfield	a region in which coal deposits of possible economic value occur
// L.CONT	continent	continent: Europe, Africa, Asia, North America, South America, Oceania, Antarctica
// L.CST	coast	a zone of variable width straddling the shoreline
// L.CTRB	business center	a place where a number of businesses are located
// L.DEVH	housing development	a tract of land on which many houses of similar design are built according to a development plan
// L.FLD	field(s)	an open as opposed to wooded area
// L.FLDI	irrigated field(s)	a tract of level or terraced land which is irrigated
// L.GASF	gasfield	an area containing a subterranean store of natural gas of economic value
// L.GRAZ	grazing area	an area of grasses and shrubs used for grazing
// L.GVL	gravel area	an area covered with gravel
// L.INDS	industrial area	an area characterized by industrial activity
// L.LAND	arctic land	a tract of land in the Arctic
// L.LCTY	locality	a minor area or place of unspecified or mixed character and indefinite boundaries
// L.MILB	military base	a place used by an army or other armed service for storing arms and supplies, and for accommodating and training troops, a base from which operations can be initiated
// L.MNA	mining area	an area of mine sites where minerals and ores are extracted
// L.MVA	maneuver area	a tract of land where military field exercises are carried out
// L.NVB	naval base	an area used to store supplies, provide barracks for troops and naval personnel, a port for naval vessels, and from which operations are initiated
// L.OAS	oasis(-es)	an area in a desert made productive by the availability of water
// L.OILF	oilfield	an area containing a subterranean store of petroleum of economic value
// L.PEAT	peat cutting area	an area where peat is harvested
// L.PRK	park	an area, often of forested land, maintained as a place of beauty, or for recreation
// L.PRT	port	a place provided with terminal and transfer facilities for loading and discharging waterborne cargo or passengers, usually located in a harbor
// L.QCKS	quicksand	an area where loose sand with water moving through it may become unstable when heavy objects are placed at the surface, causing them to sink
// L.RES	reserve	a tract of public land reserved for future use or restricted as to use
// L.RESA	agricultural reserve	a tract of land reserved for agricultural reclamation and/or development
// L.RESF	forest reserve	a forested area set aside for preservation or controlled use
// L.RESH	hunting reserve	a tract of land used primarily for hunting
// L.RESN	nature reserve	an area reserved for the maintenance of a natural habitat
// L.RESP	palm tree reserve	an area of palm trees where use is controlled
// L.RESV	reservation	a tract of land set aside for aboriginal, tribal, or native populations
// L.RESW	wildlife reserve	a tract of public land reserved for the preservation of wildlife
// L.RGN	region	an area distinguished by one or more observable physical or cultural characteristics
// L.RGNE	economic region	a region of a country established for economic development or for statistical purposes
// L.RGNH	historical region	a former historic area distinguished by one or more observable physical or cultural characteristics
// L.RGNL	lake region	a tract of land distinguished by numerous lakes
// L.RNGA	artillery range	a tract of land used for artillery firing practice
// L.SALT	salt area	a shallow basin or flat where salt accumulates after periodic inundation
// L.SNOW	snowfield	an area of permanent snow and ice forming the accumulation area of a glacier
// L.TRB	tribal area	a tract of land used by nomadic or other tribes
// P.PPL	populated place	a city, town, village, or other agglomeration of buildings where people live and work
// P.PPLA	seat of a first-order administrative division	seat of a first-order administrative division (PPLC takes precedence over PPLA)
// P.PPLA2	seat of a second-order administrative division	
// P.PPLA3	seat of a third-order administrative division	
// P.PPLA4	seat of a fourth-order administrative division	
// P.PPLA5	seat of a fifth-order administrative division	
// P.PPLC	capital of a political entity	
// P.PPLCH	historical capital of a political entity	a former capital of a political entity
// P.PPLF	farm village	a populated place where the population is largely engaged in agricultural activities
// P.PPLG	seat of government of a political entity	
// P.PPLH	historical populated place	a populated place that no longer exists
// P.PPLL	populated locality	an area similar to a locality but with a small group of dwellings or other buildings
// P.PPLQ	abandoned populated place	
// P.PPLR	religious populated place	a populated place whose population is largely engaged in religious occupations
// P.PPLS	populated places	cities, towns, villages, or other agglomerations of buildings where people live and work
// P.PPLW	destroyed populated place	a village, town or city destroyed by a natural disaster, or by war
// P.PPLX	section of populated place	
// P.STLMT	israeli settlement	
// R.CSWY	causeway	a raised roadway across wet ground or shallow water
// R.OILP	oil pipeline	a pipeline used for transporting oil
// R.PRMN	promenade	a place for public walking, usually along a beach front
// R.PTGE	portage	a place where boats, goods, etc., are carried overland between navigable waters
// R.RD	road	an open way with improved surface for transportation of animals, people and vehicles
// R.RDA	ancient road	the remains of a road used by ancient cultures
// R.RDB	road bend	a conspicuously curved or bent section of a road
// R.RDCUT	road cut	an excavation cut through a hill or ridge for a road
// R.RDJCT	road junction	a place where two or more roads join
// R.RJCT	railroad junction	a place where two or more railroad tracks join
// R.RR	railroad	a permanent twin steel-rail track on which freight and passenger cars move long distances
// R.RRQ	abandoned railroad	
// R.RTE	caravan route	the route taken by caravans
// R.RYD	railroad yard	a system of tracks used for the making up of trains, and switching and storing freight cars
// R.ST	street	a paved urban thoroughfare
// R.STKR	stock route	a route taken by livestock herds
// R.TNL	tunnel	a subterranean passageway for transportation
// R.TNLN	natural tunnel	a cave that is open at both ends
// R.TNLRD	road tunnel	a tunnel through which a road passes
// R.TNLRR	railroad tunnel	a tunnel through which a railroad passes
// R.TNLS	tunnels	subterranean passageways for transportation
// R.TRL	trail	a path, track, or route used by pedestrians, animals, or off-road vehicles
// S.ADMF	administrative facility	a government building
// S.AGRF	agricultural facility	a building and/or tract of land used for improving agriculture
// S.AIRB	airbase	an area used to store supplies, provide barracks for air force personnel, hangars and runways for aircraft, and from which operations are initiated
// S.AIRF	airfield	a place on land where aircraft land and take off; no facilities provided for the commercial handling of passengers and cargo
// S.AIRH	heliport	a place where helicopters land and take off
// S.AIRP	airport	a place where aircraft regularly land and take off, with runways, navigational aids, and major facilities for the commercial handling of passengers and cargo
// S.AIRQ	abandoned airfield	
// S.AIRT	terminal	airport facilities for the handling of freight and passengers
// S.AMTH	amphitheater	an oval or circular structure with rising tiers of seats about a stage or open space
// S.ANS	archaeological/prehistoric site	a place where archeological remains, old structures, or cultural artifacts are located
// S.AQC	aquaculture facility	facility or area for the cultivation of aquatic animals and plants, especially fish, shellfish, and seaweed, in natural or controlled marine or freshwater environments; underwater agriculture
// S.ARCH	arch	a natural or man-made structure in the form of an arch
// S.ARCHV	archive	a place or institution where documents are preserved
// S.ART	piece of art	a piece of art, like a sculpture, painting. In contrast to monument (MNMT) it is not commemorative.
// S.ASTR	astronomical station	a point on the earth whose position has been determined by observations of celestial bodies
// S.ASYL	asylum	a facility where the insane are cared for and protected
// S.ATHF	athletic field	a tract of land used for playing team sports, and athletic track and field events
// S.ATM	automatic teller machine	An unattended electronic machine in a public place, connected to a data system and related equipment and activated by a bank customer to obtain cash withdrawals and other banking services. 
// S.BANK	bank	A business establishment in which money is kept for saving or commercial purposes or is invested, supplied for loans, or exchanged. 
// S.BCN	beacon	a fixed artificial navigation mark
// S.BDG	bridge	a structure erected across an obstacle such as a stream, road, etc., in order to carry roads, railroads, and pedestrians across
// S.BDGQ	ruined bridge	a destroyed or decayed bridge which is no longer functional
// S.BLDA	apartment building	a building containing several individual apartments
// S.BLDG	building(s)	a structure built for permanent use, as a house, factory, etc.
// S.BLDO	office building	commercial building where business and/or services are conducted
// S.BP	boundary marker	a fixture marking a point along a boundary
// S.BRKS	barracks	a building for lodging military personnel
// S.BRKW	breakwater	a structure erected to break the force of waves at the entrance to a harbor or port
// S.BSTN	baling station	a facility for baling agricultural products
// S.BTYD	boatyard	a waterside facility for servicing, repairing, and building small vessels
// S.BUR	burial cave(s)	a cave used for human burials
// S.BUSTN	bus station	a facility comprising ticket office, platforms, etc. for loading and unloading passengers 
// S.BUSTP	bus stop	a place lacking station facilities
// S.CARN	cairn	a heap of stones erected as a landmark or for other purposes
// S.CAVE	cave(s)	an underground passageway or chamber, or cavity on the side of a cliff
// S.CH	church	a building for public Christian worship
// S.CMP	camp(s)	a site occupied by tents, huts, or other shelters for temporary use
// S.CMPL	logging camp	a camp used by loggers
// S.CMPLA	labor camp	a camp used by migrant or temporary laborers
// S.CMPMN	mining camp	a camp used by miners
// S.CMPO	oil camp	a camp used by oilfield workers
// S.CMPQ	abandoned camp	
// S.CMPRF	refugee camp	a camp used by refugees
// S.CMTY	cemetery	a burial place or ground
// S.COMC	communication center	a facility, including buildings, antennae, towers and electronic equipment for receiving and transmitting information
// S.CRRL	corral(s)	a pen or enclosure for confining or capturing animals
// S.CSNO	casino	a building used for entertainment, especially gambling
// S.CSTL	castle	a large fortified building or set of buildings
// S.CSTM	customs house	a building in a port where customs and duties are paid, and where vessels are entered and cleared
// S.CTHSE	courthouse	a building in which courts of law are held
// S.CTRA	atomic center	a facility where atomic research is carried out
// S.CTRCM	community center	a facility for community recreation and other activities
// S.CTRF	facility center	a place where more than one facility is situated
// S.CTRM	medical center	a complex of health care buildings including two or more of the following: hospital, medical school, clinic, pharmacy, doctor's offices, etc.
// S.CTRR	religious center	a facility where more than one religious activity is carried out, e.g., retreat, school, monastery, worship
// S.CTRS	space center	a facility for launching, tracking, or controlling satellites and space vehicles
// S.CVNT	convent	a building where a community of nuns lives in seclusion
// S.DAM	dam	a barrier constructed across a stream to impound water
// S.DAMQ	ruined dam	a destroyed or decayed dam which is no longer functional
// S.DAMSB	sub-surface dam	a dam put down to bedrock in a sand river
// S.DARY	dairy	a facility for the processing, sale and distribution of milk or milk products
// S.DCKD	dry dock	a dock providing support for a vessel, and means for removing the water so that the bottom of the vessel can be exposed
// S.DCKY	dockyard	a facility for servicing, building, or repairing ships
// S.DIKE	dike	an earth or stone embankment usually constructed for flood or stream control
// S.DIP	diplomatic facility	office, residence, or facility of a foreign government, which may include an embassy, consulate, chancery, office of charge d'affaires, or other diplomatic, economic, military, or cultural mission
// S.DPOF	fuel depot	an area where fuel is stored
// S.EST	estate(s)	a large commercialized agricultural landholding with associated buildings and other facilities
// S.ESTO	oil palm plantation	an estate specializing in the cultivation of oil palm trees
// S.ESTR	rubber plantation	an estate which specializes in growing and tapping rubber trees
// S.ESTSG	sugar plantation	an estate that specializes in growing sugar cane
// S.ESTT	tea plantation	an estate which specializes in growing tea bushes
// S.ESTX	section of estate	
// S.FCL	facility	a building or buildings housing a center, institute, foundation, hospital, prison, mission, courthouse, etc.
// S.FNDY	foundry	a building or works where metal casting is carried out
// S.FRM	farm	a tract of land with associated buildings devoted to agriculture
// S.FRMQ	abandoned farm	
// S.FRMS	farms	tracts of land with associated buildings devoted to agriculture
// S.FRMT	farmstead	the buildings and adjacent service areas of a farm
// S.FT	fort	a defensive structure or earthworks
// S.FY	ferry	a boat or other floating conveyance and terminal facilities regularly used to transport people and vehicles across a waterbody
// S.FYT	ferry terminal	a place where ferries pick-up and discharge passengers, vehicles and or cargo
// S.GATE	gate	a controlled access entrance or exit
// S.GDN	garden(s)	an enclosure for displaying selected plant or animal life
// S.GHAT	ghat	a set of steps leading to a river, which are of religious significance, and at their base is usually a platform for bathing
// S.GHSE	guest house	a house used to provide lodging for paying guests
// S.GOSP	gas-oil separator plant	a facility for separating gas from oil
// S.GOVL	local government office	a facility housing local governmental offices, usually a city, town, or village hall
// S.GRVE	grave	a burial site
// S.HERM	hermitage	a secluded residence, usually for religious sects
// S.HLT	halting place	a place where caravans stop for rest
// S.HMSD	homestead	a residence, owner's or manager's, on a sheep or cattle station, woolshed, outcamp, or Aboriginal outstation, specific to Australia and New Zealand 
// S.HSE	house(s)	a building used as a human habitation
// S.HSEC	country house	a large house, mansion, or chateau, on a large estate
// S.HSP	hospital	a building in which sick or injured, especially those confined to bed, are medically treated
// S.HSPC	clinic	a medical facility associated with a hospital for outpatients
// S.HSPD	dispensary	a building where medical or dental aid is dispensed
// S.HSPL	leprosarium	an asylum or hospital for lepers
// S.HSTS	historical site	a place of historical importance
// S.HTL	hotel	a building providing lodging and/or meals for the public
// S.HUT	hut	a small primitive house
// S.HUTS	huts	small primitive houses
// S.INSM	military installation	a facility for use of and control by armed forces
// S.ITTR	research institute	a facility where research is carried out
// S.JTY	jetty	a structure built out into the water at a river mouth or harbor entrance to regulate currents and silting
// S.LDNG	landing	a place where boats receive or discharge passengers and freight, but lacking most port facilities
// S.LEPC	leper colony	a settled area inhabited by lepers in relative isolation
// S.LIBR	library	A place in which information resources such as books are kept for reading, reference, or lending.
// S.LNDF	landfill	a place for trash and garbage disposal in which the waste is buried between layers of earth to build up low-lying land
// S.LOCK	lock(s)	a basin in a waterway with gates at each end by means of which vessels are passed from one water level to another
// S.LTHSE	lighthouse	a distinctive structure exhibiting a major navigation light
// S.MALL	mall	A large, often enclosed shopping complex containing various stores, businesses, and restaurants usually accessible by common passageways.
// S.MAR	marina	a harbor facility for small boats, yachts, etc.
// S.MFG	factory	one or more buildings where goods are manufactured, processed or fabricated
// S.MFGB	brewery	one or more buildings where beer is brewed
// S.MFGC	cannery	a building where food items are canned
// S.MFGCU	copper works	a facility for processing copper ore
// S.MFGLM	limekiln	a furnace in which limestone is reduced to lime
// S.MFGM	munitions plant	a factory where ammunition is made
// S.MFGPH	phosphate works	a facility for producing fertilizer
// S.MFGQ	abandoned factory	
// S.MFGSG	sugar refinery	a facility for converting raw sugar into refined sugar
// S.MKT	market	a place where goods are bought and sold at regular intervals
// S.ML	mill(s)	a building housing machines for transforming, shaping, finishing, grinding, or extracting products
// S.MLM	ore treatment plant	a facility for improving the metal content of ore by concentration
// S.MLO	olive oil mill	a mill where oil is extracted from olives
// S.MLSG	sugar mill	a facility where sugar cane is processed into raw sugar
// S.MLSGQ	former sugar mill	a sugar mill no longer used as a sugar mill
// S.MLSW	sawmill	a mill where logs or lumber are sawn to specified shapes and sizes
// S.MLWND	windmill	a mill or water pump powered by wind
// S.MLWTR	water mill	a mill powered by running water
// S.MN	mine(s)	a site where mineral ores are extracted from the ground by excavating surface pits and subterranean passages
// S.MNAU	gold mine(s)	a mine where gold ore, or alluvial gold is extracted
// S.MNC	coal mine(s)	a mine where coal is extracted
// S.MNCR	chrome mine(s)	a mine where chrome ore is extracted
// S.MNCU	copper mine(s)	a mine where copper ore is extracted
// S.MNFE	iron mine(s)	a mine where iron ore is extracted
// S.MNMT	monument	a commemorative structure or statue
// S.MNN	salt mine(s)	a mine from which salt is extracted
// S.MNQ	abandoned mine	
// S.MNQR	quarry(-ies)	a surface mine where building stone or gravel and sand, etc. are extracted
// S.MOLE	mole	a massive structure of masonry or large stones serving as a pier or breakwater
// S.MSQE	mosque	a building for public Islamic worship
// S.MSSN	mission	a place characterized by dwellings, school, church, hospital and other facilities operated by a religious group for the purpose of providing charitable services and to propagate religion
// S.MSSNQ	abandoned mission	
// S.MSTY	monastery	a building and grounds where a community of monks lives in seclusion
// S.MTRO	metro station	metro station (Underground, Tube, or Metro) 
// S.MUS	museum	a building where objects of permanent interest in one or more of the arts and sciences are preserved and exhibited
// S.NOV	novitiate	a religious house or school where novices are trained
// S.NSY	nursery(-ies)	a place where plants are propagated for transplanting or grafting
// S.OBPT	observation point	a wildlife or scenic observation point
// S.OBS	observatory	a facility equipped for observation of atmospheric or space phenomena
// S.OBSR	radio observatory	a facility equipped with an array of antennae for receiving radio waves from space
// S.OILJ	oil pipeline junction	a section of an oil pipeline where two or more pipes join together
// S.OILQ	abandoned oil well	
// S.OILR	oil refinery	a facility for converting crude oil into refined petroleum products
// S.OILT	tank farm	a tract of land occupied by large, cylindrical, metal tanks in which oil or liquid petrochemicals are stored
// S.OILW	oil well	a well from which oil may be pumped
// S.OPRA	opera house	A theater designed chiefly for the performance of operas.
// S.PAL	palace	a large stately house, often a royal or presidential residence
// S.PGDA	pagoda	a tower-like storied structure, usually a Buddhist shrine
// S.PIER	pier	a structure built out into navigable water on piles providing berthing for ships and recreation
// S.PKLT	parking lot	an area used for parking vehicles
// S.PMPO	oil pumping station	a facility for pumping oil through a pipeline
// S.PMPW	water pumping station	a facility for pumping water from a major well or through a pipeline
// S.PO	post office	a public building in which mail is received, sorted and distributed
// S.PP	police post	a building in which police are stationed
// S.PPQ	abandoned police post	
// S.PRKGT	park gate	a controlled access to a park
// S.PRKHQ	park headquarters	a park administrative facility
// S.PRN	prison	a facility for confining prisoners
// S.PRNJ	reformatory	a facility for confining, training, and reforming young law offenders
// S.PRNQ	abandoned prison	
// S.PS	power station	a facility for generating electric power
// S.PSH	hydroelectric power station	a building where electricity is generated from water power
// S.PSN	nuclear power station	nuclear power station
// S.PSTB	border post	a post or station at an international boundary for the regulation of movement of people and goods
// S.PSTC	customs post	a building at an international boundary where customs and duties are paid on goods
// S.PSTP	patrol post	a post from which patrols are sent out
// S.PYR	pyramid	an ancient massive structure of square ground plan with four triangular faces meeting at a point and used for enclosing tombs
// S.PYRS	pyramids	ancient massive structures of square ground plan with four triangular faces meeting at a point and used for enclosing tombs
// S.QUAY	quay	a structure of solid construction along a shore or bank which provides berthing for ships and which generally provides cargo handling facilities
// S.RDCR	traffic circle	a road junction formed around a central circle about which traffic moves in one direction only
// S.RDIN	intersection	a junction of two or more highways by a system of separate levels that permit traffic to pass from one to another without the crossing of traffic streams
// S.RECG	golf course	a recreation field where golf is played
// S.RECR	racetrack	a track where races are held
// S.REST	restaurant	A place where meals are served to the public
// S.RET	store	a building where goods and/or services are offered for sale
// S.RHSE	resthouse	a structure maintained for the rest and shelter of travelers
// S.RKRY	rookery	a breeding place of a colony of birds or seals
// S.RLG	religious site	an ancient site of significant religious importance
// S.RLGR	retreat	a place of temporary seclusion, especially for religious groups
// S.RNCH	ranch(es)	a large farm specializing in extensive grazing of livestock
// S.RSD	railroad siding	a short track parallel to and joining the main track
// S.RSGNL	railroad signal	a signal at the entrance of a particular section of track governing the movement of trains
// S.RSRT	resort	a specialized facility for vacation, health, or participation sports activities
// S.RSTN	railroad station	a facility comprising ticket office, platforms, etc. for loading and unloading train passengers and freight
// S.RSTNQ	abandoned railroad station	
// S.RSTP	railroad stop	a place lacking station facilities where trains stop to pick up and unload passengers and freight
// S.RSTPQ	abandoned railroad stop	
// S.RUIN	ruin(s)	a destroyed or decayed structure which is no longer functional
// S.SCH	school	building(s) where instruction in one or more branches of knowledge takes place
// S.SCHA	agricultural school	a school with a curriculum focused on agriculture
// S.SCHC	college	the grounds and buildings of an institution of higher learning
// S.SCHL	language school	Language Schools & Institutions
// S.SCHM	military school	a school at which military science forms the core of the curriculum
// S.SCHN	maritime school	a school at which maritime sciences form the core of the curriculum
// S.SCHT	technical school	post-secondary school with a specifically technical or vocational curriculum
// S.SECP	State Exam Prep Centre	state exam preparation centres
// S.SHPF	sheepfold	a fence or wall enclosure for sheep and other small herd animals
// S.SHRN	shrine	a structure or place memorializing a person or religious concept
// S.SHSE	storehouse	a building for storing goods, especially provisions
// S.SLCE	sluice	a conduit or passage for carrying off surplus water from a waterbody, usually regulated by means of a sluice gate
// S.SNTR	sanatorium	a facility where victims of physical or mental disorders are treated
// S.SPA	spa	a resort area usually developed around a medicinal spring
// S.SPLY	spillway	a passage or outlet through which surplus water flows over, around or through a dam
// S.SQR	square	a broad, open, public area near the center of a town or city
// S.STBL	stable	a building for the shelter and feeding of farm animals, especially horses
// S.STDM	stadium	a structure with an enclosure for athletic games with tiers of seats for spectators
// S.STNB	scientific research base	a scientific facility used as a base from which research is carried out or monitored
// S.STNC	coast guard station	a facility from which the coast is guarded by armed vessels
// S.STNE	experiment station	a facility for carrying out experiments
// S.STNF	forest station	a collection of buildings and facilities for carrying out forest management
// S.STNI	inspection station	a station at which vehicles, goods, and people are inspected
// S.STNM	meteorological station	a station at which weather elements are recorded
// S.STNR	radio station	a facility for producing and transmitting information by radio waves
// S.STNS	satellite station	a facility for tracking and communicating with orbiting satellites
// S.STNW	whaling station	a facility for butchering whales and processing train oil
// S.STPS	steps	stones or slabs placed for ease in ascending or descending a steep slope
// S.SWT	sewage treatment plant	facility for the processing of sewage and/or wastewater
// S.SYG	synagogue	a place for Jewish worship and religious instruction
// S.THTR	theater	A building, room, or outdoor structure for the presentation of plays, films, or other dramatic performances
// S.TMB	tomb(s)	a structure for interring bodies
// S.TMPL	temple(s)	an edifice dedicated to religious worship
// S.TNKD	cattle dipping tank	a small artificial pond used for immersing cattle in chemically treated water for disease control
// S.TOLL	toll gate/barrier	highway toll collection station
// S.TOWR	tower	a high conspicuous structure, typically much higher than its diameter
// S.TRAM	tram	rail vehicle along urban streets (also known as streetcar or trolley)
// S.TRANT	transit terminal	facilities for the handling of vehicular freight and passengers
// S.TRIG	triangulation station	a point on the earth whose position has been determined by triangulation
// S.TRMO	oil pipeline terminal	a tank farm or loading facility at the end of an oil pipeline
// S.TWO	temp work office	Temporary Work Offices
// S.UNIP	university prep school	University Preparation Schools & Institutions
// S.UNIV	university	An institution for higher learning with teaching and research facilities constituting a graduate school and professional schools that award master's degrees and doctorates and an undergraduate division that awards bachelor's degrees.
// S.USGE	united states government establishment	a facility operated by the United States Government in Panama
// S.VETF	veterinary facility	a building or camp at which veterinary services are available
// S.WALL	wall	a thick masonry structure, usually enclosing a field or building, or forming the side of a structure
// S.WALLA	ancient wall	the remains of a linear defensive stone structure
// S.WEIR	weir(s)	a small dam in a stream, designed to raise the water level or to divert stream flow through a desired channel
// S.WHRF	wharf(-ves)	a structure of open rather than solid construction along a shore or a bank which provides berthing for ships and cargo-handling facilities
// S.WRCK	wreck	the site of the remains of a wrecked vessel
// S.WTRW	waterworks	a facility for supplying potable water through a water source and a system of pumps and filtration beds
// S.ZNF	free trade zone	an area, usually a section of a port, where goods may be received and shipped free of customs duty and of most customs regulations
// S.ZOO	zoo	a zoological garden or park where wild animals are kept for exhibition
// T.ASPH	asphalt lake	a small basin containing naturally occurring asphalt
// T.ATOL	atoll(s)	a ring-shaped coral reef which has closely spaced islands on it encircling a lagoon
// T.BAR	bar	a shallow ridge or mound of coarse unconsolidated material in a stream channel, at the mouth of a stream, estuary, or lagoon and in the wave-break zone along coasts
// T.BCH	beach	a shore zone of coarse unconsolidated sediment that extends from the low-water line to the highest reach of storm waves
// T.BCHS	beaches	a shore zone of coarse unconsolidated sediment that extends from the low-water line to the highest reach of storm waves
// T.BDLD	badlands	an area characterized by a maze of very closely spaced, deep, narrow, steep-sided ravines, and sharp crests and pinnacles
// T.BLDR	boulder field	a high altitude or high latitude bare, flat area covered with large angular rocks
// T.BLHL	blowhole(s)	a hole in coastal rock through which sea water is forced by a rising tide or waves and spurted through an outlet into the air
// T.BLOW	blowout(s)	a small depression in sandy terrain, caused by wind erosion
// T.BNCH	bench	a long, narrow bedrock platform bounded by steeper slopes above and below, usually overlooking a waterbody
// T.BUTE	butte(s)	a small, isolated, usually flat-topped hill with steep sides
// T.CAPE	cape	a land area, more prominent than a point, projecting into the sea and marking a notable change in coastal direction
// T.CFT	cleft(s)	a deep narrow slot, notch, or groove in a coastal cliff
// T.CLDA	caldera	a depression measuring kilometers across formed by the collapse of a volcanic mountain
// T.CLF	cliff(s)	a high, steep to perpendicular slope overlooking a waterbody or lower area
// T.CNYN	canyon	a deep, narrow valley with steep sides cutting into a plateau or mountainous area
// T.CONE	cone(s)	a conical landform composed of mud or volcanic material
// T.CRDR	corridor	a strip or area of land having significance as an access way
// T.CRQ	cirque	a bowl-like hollow partially surrounded by cliffs or steep slopes at the head of a glaciated valley
// T.CRQS	cirques	bowl-like hollows partially surrounded by cliffs or steep slopes at the head of a glaciated valley
// T.CRTR	crater(s)	a generally circular saucer or bowl-shaped depression caused by volcanic or meteorite explosive action
// T.CUET	cuesta(s)	an asymmetric ridge formed on tilted strata
// T.DLTA	delta	a flat plain formed by alluvial deposits at the mouth of a stream
// T.DPR	depression(s)	a low area surrounded by higher land and usually characterized by interior drainage
// T.DSRT	desert	a large area with little or no vegetation due to extreme environmental conditions
// T.DUNE	dune(s)	a wave form, ridge or star shape feature composed of sand
// T.DVD	divide	a line separating adjacent drainage basins
// T.ERG	sandy desert	an extensive tract of shifting sand and sand dunes
// T.FAN	fan(s)	a fan-shaped wedge of coarse alluvium with apex merging with a mountain stream bed and the fan spreading out at a low angle slope onto an adjacent plain
// T.FORD	ford	a shallow part of a stream which can be crossed on foot or by land vehicle
// T.FSR	fissure	a crack associated with volcanism
// T.GAP	gap	a low place in a ridge, not used for transportation
// T.GRGE	gorge(s)	a short, narrow, steep-sided section of a stream valley
// T.HDLD	headland	a high projection of land extending into a large body of water beyond the line of the coast
// T.HLL	hill	a rounded elevation of limited extent rising above the surrounding land with local relief of less than 300m
// T.HLLS	hills	rounded elevations of limited extent rising above the surrounding land with local relief of less than 300m
// T.HMCK	hammock(s)	a patch of ground, distinct from and slightly above the surrounding plain or wetland. Often occurs in groups
// T.HMDA	rock desert	a relatively sand-free, high bedrock plateau in a hot desert, with or without a gravel veneer
// T.INTF	interfluve	a relatively undissected upland between adjacent stream valleys
// T.ISL	island	a tract of land, smaller than a continent, surrounded by water at high water
// T.ISLET	islet	small island, bigger than rock, smaller than island.
// T.ISLF	artificial island	an island created by landfill or diking and filling in a wetland, bay, or lagoon
// T.ISLM	mangrove island	a mangrove swamp surrounded by a waterbody
// T.ISLS	islands	tracts of land, smaller than a continent, surrounded by water at high water
// T.ISLT	land-tied island	a coastal island connected to the mainland by barrier beaches, levees or dikes
// T.ISLX	section of island	
// T.ISTH	isthmus	a narrow strip of land connecting two larger land masses and bordered by water
// T.KRST	karst area	a distinctive landscape developed on soluble rock such as limestone characterized by sinkholes, caves, disappearing streams, and underground drainage
// T.LAVA	lava area	an area of solidified lava
// T.LEV	levee	a natural low embankment bordering a distributary or meandering stream; often built up artificially to control floods
// T.MESA	mesa(s)	a flat-topped, isolated elevation with steep slopes on all sides, less extensive than a plateau
// T.MND	mound(s)	a low, isolated, rounded hill
// T.MRN	moraine	a mound, ridge, or other accumulation of glacial till
// T.MT	mountain	an elevation standing high above the surrounding area with small summit area, steep slopes and local relief of 300m or more
// T.MTS	mountains	a mountain range or a group of mountains or high ridges
// T.NKM	meander neck	a narrow strip of land between the two limbs of a meander loop at its narrowest point
// T.NTK	nunatak	a rock or mountain peak protruding through glacial ice
// T.NTKS	nunataks	rocks or mountain peaks protruding through glacial ice
// T.PAN	pan	a near-level shallow, natural depression or basin, usually containing an intermittent lake, pond, or pool
// T.PANS	pans	a near-level shallow, natural depression or basin, usually containing an intermittent lake, pond, or pool
// T.PASS	pass	a break in a mountain range or other high obstruction, used for transportation from one side to the other [See also gap]
// T.PEN	peninsula	an elongate area of land projecting into a body of water and nearly surrounded by water
// T.PENX	section of peninsula	
// T.PK	peak	a pointed elevation atop a mountain, ridge, or other hypsographic feature
// T.PKS	peaks	pointed elevations atop a mountain, ridge, or other hypsographic features
// T.PLAT	plateau	an elevated plain with steep slopes on one or more sides, and often with incised streams
// T.PLATX	section of plateau	
// T.PLDR	polder	an area reclaimed from the sea by diking and draining
// T.PLN	plain(s)	an extensive area of comparatively level to gently undulating land, lacking surface irregularities, and usually adjacent to a higher area
// T.PLNX	section of plain	
// T.PROM	promontory(-ies)	a bluff or prominent hill overlooking or projecting into a lowland
// T.PT	point	a tapering piece of land projecting into a body of water, less prominent than a cape
// T.PTS	points	tapering pieces of land projecting into a body of water, less prominent than a cape
// T.RDGB	beach ridge	a ridge of sand just inland and parallel to the beach, usually in series
// T.RDGE	ridge(s)	a long narrow elevation with steep sides, and a more or less continuous crest
// T.REG	stony desert	a desert plain characterized by a surface veneer of gravel and stones
// T.RK	rock	a conspicuous, isolated rocky mass
// T.RKFL	rockfall	an irregular mass of fallen rock at the base of a cliff or steep slope
// T.RKS	rocks	conspicuous, isolated rocky masses
// T.SAND	sand area	a tract of land covered with sand
// T.SBED	dry stream bed	a channel formerly containing the water of a stream
// T.SCRP	escarpment	a long line of cliffs or steep slopes separating level surfaces above and below
// T.SDL	saddle	a broad, open pass crossing a ridge or between hills or mountains
// T.SHOR	shore	a narrow zone bordering a waterbody which covers and uncovers at high and low water, respectively
// T.SINK	sinkhole	a small crater-shape depression in a karst area
// T.SLID	slide	a mound of earth material, at the base of a slope and the associated scoured area
// T.SLP	slope(s)	a surface with a relatively uniform slope angle
// T.SPIT	spit	a narrow, straight or curved continuation of a beach into a waterbody
// T.SPUR	spur(s)	a subordinate ridge projecting outward from a hill, mountain or other elevation
// T.TAL	talus slope	a steep concave slope formed by an accumulation of loose rock fragments at the base of a cliff or steep slope
// T.TRGD	interdune trough(s)	a long wind-swept trough between parallel longitudinal dunes
// T.TRR	terrace	a long, narrow alluvial platform bounded by steeper slopes above and below, usually overlooking a waterbody
// T.UPLD	upland	an extensive interior region of high land with low to moderate surface relief
// T.VAL	valley	an elongated depression usually traversed by a stream
// T.VALG	hanging valley	a valley the floor of which is notably higher than the valley or shore to which it leads; most common in areas that have been glaciated
// T.VALS	valleys	elongated depressions usually traversed by a stream
// T.VALX	section of valley	
// T.VLC	volcano	a conical elevation composed of volcanic materials with a crater at the top
// U.APNU	apron	a gentle slope, with a generally smooth surface, particularly found around groups of islands and seamounts
// U.ARCU	arch	a low bulge around the southeastern end of the island of Hawaii
// U.ARRU	arrugado	an area of subdued corrugations off Baja California
// U.BDLU	borderland	a region adjacent to a continent, normally occupied by or bordering a shelf, that is highly irregular with depths well in excess of those typical of a shelf
// U.BKSU	banks	elevations, typically located on a shelf, over which the depth of water is relatively shallow but sufficient for safe surface navigation
// U.BNKU	bank	an elevation, typically located on a shelf, over which the depth of water is relatively shallow but sufficient for safe surface navigation
// U.BSNU	basin	a depression more or less equidimensional in plan and of variable extent
// U.CDAU	cordillera	an entire mountain system including the subordinate ranges, interior plateaus, and basins
// U.CNSU	canyons	relatively narrow, deep depressions with steep sides, the bottom of which generally has a continuous slope
// U.CNYU	canyon	a relatively narrow, deep depression with steep sides, the bottom of which generally has a continuous slope
// U.CRSU	continental rise	a gentle slope rising from oceanic depths towards the foot of a continental slope
// U.DEPU	deep	a localized deep area within the confines of a larger feature, such as a trough, basin or trench
// U.EDGU	shelf edge	a line along which there is a marked increase of slope at the outer margin of a continental shelf or island shelf
// U.ESCU	escarpment (or scarp)	an elongated and comparatively steep slope separating flat or gently sloping areas
// U.FANU	fan	a relatively smooth feature normally sloping away from the lower termination of a canyon or canyon system
// U.FLTU	flat	a small level or nearly level area
// U.FRZU	fracture zone	an extensive linear zone of irregular topography of the sea floor, characterized by steep-sided or asymmetrical ridges, troughs, or escarpments
// U.FURU	furrow	a closed, linear, narrow, shallow depression
// U.GAPU	gap	a narrow break in a ridge or rise
// U.GLYU	gully	a small valley-like feature
// U.HLLU	hill	an elevation rising generally less than 500 meters
// U.HLSU	hills	elevations rising generally less than 500 meters
// U.HOLU	hole	a small depression of the sea floor
// U.KNLU	knoll	an elevation rising generally more than 500 meters and less than 1,000 meters and of limited extent across the summit
// U.KNSU	knolls	elevations rising generally more than 500 meters and less than 1,000 meters and of limited extent across the summits
// U.LDGU	ledge	a rocky projection or outcrop, commonly linear and near shore
// U.LEVU	levee	an embankment bordering a canyon, valley, or seachannel
// U.MESU	mesa	an isolated, extensive, flat-topped elevation on the shelf, with relatively steep sides
// U.MNDU	mound	a low, isolated, rounded hill
// U.MOTU	moat	an annular depression that may not be continuous, located at the base of many seamounts, islands, and other isolated elevations
// U.MTU	mountain	a well-delineated subdivision of a large and complex positive feature
// U.PKSU	peaks	prominent elevations, part of a larger feature, either pointed or of very limited extent across the summit
// U.PKU	peak	a prominent elevation, part of a larger feature, either pointed or of very limited extent across the summit
// U.PLNU	plain	a flat, gently sloping or nearly level region
// U.PLTU	plateau	a comparatively flat-topped feature of considerable extent, dropping off abruptly on one or more sides
// U.PNLU	pinnacle	a high tower or spire-shaped pillar of rock or coral, alone or cresting a summit
// U.PRVU	province	a region identifiable by a group of similar physiographic features whose characteristics are markedly in contrast with surrounding areas
// U.RDGU	ridge	a long narrow elevation with steep sides
// U.RDSU	ridges	long narrow elevations with steep sides
// U.RFSU	reefs	surface-navigation hazards composed of consolidated material
// U.RFU	reef	a surface-navigation hazard composed of consolidated material
// U.RISU	rise	a broad elevation that rises gently, and generally smoothly, from the sea floor
// U.SCNU	seachannel	a continuously sloping, elongated depression commonly found in fans or plains and customarily bordered by levees on one or two sides
// U.SCSU	seachannels	continuously sloping, elongated depressions commonly found in fans or plains and customarily bordered by levees on one or two sides
// U.SDLU	saddle	a low part, resembling in shape a saddle, in a ridge or between contiguous seamounts
// U.SHFU	shelf	a zone adjacent to a continent (or around an island) that extends from the low water line to a depth at which there is usually a marked increase of slope towards oceanic depths
// U.SHLU	shoal	a surface-navigation hazard composed of unconsolidated material
// U.SHSU	shoals	hazards to surface navigation composed of unconsolidated material
// U.SHVU	shelf valley	a valley on the shelf, generally the shoreward extension of a canyon
// U.SILU	sill	the low part of a gap or saddle separating basins
// U.SLPU	slope	the slope seaward from the shelf edge to the beginning of a continental rise or the point where there is a general reduction in slope
// U.SMSU	seamounts	elevations rising generally more than 1,000 meters and of limited extent across the summit
// U.SMU	seamount	an elevation rising generally more than 1,000 meters and of limited extent across the summit
// U.SPRU	spur	a subordinate elevation, ridge, or rise projecting outward from a larger feature
// U.TERU	terrace	a relatively flat horizontal or gently inclined surface, sometimes long and narrow, which is bounded by a steeper ascending slope on one side and by a steep descending slope on the opposite side
// U.TMSU	tablemounts (or guyots)	seamounts having a comparatively smooth, flat top
// U.TMTU	tablemount (or guyot)	a seamount having a comparatively smooth, flat top
// U.TNGU	tongue	an elongate (tongue-like) extension of a flat sea floor into an adjacent higher feature
// U.TRGU	trough	a long depression of the sea floor characteristically flat bottomed and steep sided, and normally shallower than a trench
// U.TRNU	trench	a long, narrow, characteristically very deep and asymmetrical depression of the sea floor, with relatively steep sides
// U.VALU	valley	a relatively shallow, wide depression, the bottom of which usually has a continuous gradient
// U.VLSU	valleys	a relatively shallow, wide depression, the bottom of which usually has a continuous gradient
// V.BUSH	bush(es)	a small clump of conspicuous bushes in an otherwise bare area
// V.CULT	cultivated area	an area under cultivation
// V.FRST	forest(s)	an area dominated by tree vegetation
// V.FRSTF	fossilized forest	a forest fossilized by geologic processes and now exposed at the earth's surface
// V.GROVE	grove	a small wooded area or collection of trees growing closely together, occurring naturally or deliberately planted
// V.GRSLD	grassland	an area dominated by grass vegetation
// V.GRVC	coconut grove	a planting of coconut trees
// V.GRVO	olive grove	a planting of olive trees
// V.GRVP	palm grove	a planting of palm trees
// V.GRVPN	pine grove	a planting of pine trees
// V.HTH	heath	an upland moor or sandy area dominated by low shrubby vegetation including heather
// V.MDW	meadow	a small, poorly drained area dominated by grassy vegetation
// V.OCH	orchard(s)	a planting of fruit or nut trees
// V.SCRB	scrubland	an area of low trees, bushes, and shrubs stunted by some environmental limitation
// V.TREE	tree(s)	a conspicuous tree used as a landmark
// V.TUND	tundra	a marshy, treeless, high latitude plain, dominated by mosses, lichens, and low shrub vegetation under permafrost conditions
// V.VIN	vineyard	a planting of grapevines
// V.VINS	vineyards	plantings of grapevines
];