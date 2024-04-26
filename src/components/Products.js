import React, { useEffect, useState } from "react";
import "./Products.css";
import arrow from "../Assets/arrow-left.png";
import Mock from "../Assets/mockapi/mockdata";
import heart from "../Assets/heart.png";
const Products = () => {

  const [toggle, setToggle] = useState(false);
  const [filter, setFilter] = useState("Show Filter");
  const [zind, setZind] = useState("");
  const [adjuststyle, setAdjustStyle] = useState("products");
  const [like, setLike] = useState("");
  const mydata = Mock;
  const [Mockdata, setMockData] = useState(mydata);
  const [count, setCount] = useState(0);

  const [idealfor, setIdealfor] = useState(false);
  const [rotate, setRotate] = useState("rotate90deg");
  const [occasion, setOccasion] = useState(false);
  const [icocls, setIcocls] = useState("rotate90deg");
  const [work, setWork] = useState(false);
  const [workcls, setworkcls] = useState("rotate90deg");
  const [fabric, setFabric] = useState(false);
  const [fabriccls, setfabriccls] = useState("rotate90deg");
  const [segment, setSegment] = useState(false);
  const [segmentcls, setsegmentcls] = useState("rotate90deg");
  const [suitable, setSuitable] = useState(false);
  const [suitablecls, setsuitablecls] = useState("rotate90deg");
  const [rawmaterials, setRawmaterials] = useState(false);
  const [rawcls, setrawcls] = useState("rotate90deg");
  const [patern, setPatern] = useState(false);
  const [patterncls, setpatterncls] = useState("rotate90deg");


  // const [lowtohigh, setLowtoHigh] = useState([])
  // const [hightolow, setHightolow] = useState([])

  useEffect(() => {}, [Mockdata]);

  const handleIdeal = () => {
    setIdealfor(!idealfor);
    setRotate(idealfor ? "rotate270deg" : "rotate90deg");
  };
  
  const handleOccasion = () => {
    setOccasion(!occasion);
    setIcocls(occasion ? "rotate270deg" : "rotate90deg");
  };
  
  const handlework = () => {
    setWork(!work);
    setworkcls(work ? "rotate270deg" : "rotate90deg");
  };
  
  const handfabric = () => {
    setFabric(!fabric);
    setfabriccls(fabric ? "rotate270deg" : "rotate90deg");
  };
  
  const handsegment = () => {
    setSegment(!segment);
    setsegmentcls(segment ? "rotate270deg" : "rotate90deg");
  };
  
  const handsuitable = () => {
    setSuitable(!suitable);
    setsuitablecls(suitable ? "rotate270deg" : "rotate90deg");
  };
  
  const handrawmeterials = () => {
    setRawmaterials(!rawmaterials);
    setrawcls(rawmaterials ? "rotate270deg" : "rotate90deg");
  };
  
  const handpatern = () => {
    setPatern(!patern);
    setpatterncls(patern ? "rotate270deg" : "rotate90deg");
  };

  const handleFilterVisibility = () => {
    setToggle(!toggle);
    setFilter(toggle ? "Show Filter" : "Hide Filter");
    setAdjustStyle(toggle ? "products" : "products width75");
  };

  const handleZindex = () => {
    setToggle(!toggle);
    setZind(toggle ? "" : "zind2");
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    let sortedData = [...mydata];

    switch (selectedOption) {
      case "Recommended":
        sortedData = sortedData.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        break;
      case "Newest first":
        sortedData = sortedData.sort((a, b) => b.id - a.id);
        break;
      case "Popular":
        sortedData = sortedData.sort((a, b) => a.id - b.id);
        break;
      case "hight to low":
        sortedData = sortedData.sort((a, b) => b.price - a.price);
        break;
      case "low to high":
        sortedData = sortedData.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setMockData(sortedData);
    setCount(count + 1);
  };

  const handleLikeClick = () =>{
    setLike(".liked");
    
  }
  
  return (
    <>
      <section className="filter">
        <span className="showfilter">
          <span className="qty">3425 ITEMS</span>
          <span className="hidefilter" onClick={handleFilterVisibility}>
            <span className="ico">
              <img style={{}} src={arrow} alt="arrow"  />
            </span>
            <span className="txt">{filter}</span>
          </span>
        </span>
        <span className="filterlogo" onClick={handleZindex}>
          FILTER
        </span>
        <span className="sort">
          <span className="txt">
            <select name="" id="select" onChange={handleSortChange}>
              <option value="Recommended">RECOMMENDED</option>
              <option value="Newest first">NEWEST FIRST</option>
              <option value="Popular">POPULAR</option>
              <option value="hight to low">PRICE: HIGH TO LOW</option>
              <option value="low to high">PRICE: LOW TO HIGH</option>
            </select>
          </span>{" "}
        </span>
      </section>
      <section className="body-content">
        {toggle ? (
          <aside id="filter" className={zind}>
            <span className="costomize">
              <input type="checkbox" />
              <span>CUSTOMIZABLE</span>
            </span>
            <span className="type">
              <span className="type-heading">
                <span>IDEAL FOR</span>

                <img src={arrow} onClick={handleIdeal} className={rotate} alt="abc"/>
              </span>
              <span className="ideal-all">All</span>
              {idealfor ? (
                <>
                  <span className="category">Unselect all</span>
                  <div className="catagory-type">
                    <span className="men">
                      <input type="checkbox" />
                      <span> Men</span>
                    </span>

                    <span className="women">
                      <input type="checkbox" /> <span>Women</span>
                    </span>
                    <span className="baby">
                      <input type="checkbox" /> <span>Baby & Kids</span>
                    </span>
                  </div>
                </>
              ) : (
                ""
              )}
            </span>
            <div className="occasion">
              <span>
                OCCASION{" "}
                <img
                  src={arrow}
                  alt=""
                  onClick={handleOccasion}
                  className={icocls}
                />
              </span>
              <span className="occasion-type">All</span>
              {occasion ? (
                <>
                  <span className="category">Unselect all</span>
                  <div className="catagory-type">
                    <span className="men">
                      <input type="checkbox" />
                      <span> Men</span>
                    </span>

                    <span className="women">
                      <input type="checkbox" /> <span>Women</span>
                    </span>
                    <span className="baby">
                      <input type="checkbox" /> <span>Baby & Kids</span>
                    </span>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="work">
              <span>
                WORK
                <img src={arrow} className={workcls} onClick={handlework} alt="abc"/>
              </span>
              <span className="work-type">All</span>
              {work ? (
                <>
                  <span className="category">Unselect all</span>
                  <div className="catagory-type">
                    <span className="men">
                      <input type="checkbox" />
                      <span> Men</span>
                    </span>

                    <span className="women">
                      <input type="checkbox" /> <span>Women</span>
                    </span>
                    <span className="baby">
                      <input type="checkbox" /> <span>Baby & Kids</span>
                    </span>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="fabric">
              <span>
                FABRIC
                <img src={arrow} className={fabriccls} onClick={handfabric} alt="abc"/>
              </span>
              <span className="fabric-type">All</span>
              {fabric ? (
                <>
                  <span className="category">Unselect all</span>
                  <div className="catagory-type">
                    <span className="men">
                      <input type="checkbox" />
                      <span> Men</span>
                    </span>

                    <span className="women">
                      <input type="checkbox" /> <span>Women</span>
                    </span>
                    <span className="baby">
                      <input type="checkbox" /> <span>Baby & Kids</span>
                    </span>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="segment">
              <span>
                SEGMENT
                <img src={arrow} className={segmentcls} onClick={handsegment} alt="abc"/>
              </span>
              <span className="segment-type">All</span>
              {segment ? (
                <>
                  <span className="category">Unselect all</span>
                  <div className="catagory-type">
                    <span className="men">
                      <input type="checkbox" />
                      <span> Men</span>
                    </span>

                    <span className="women">
                      <input type="checkbox" /> <span>Women</span>
                    </span>
                    <span className="baby">
                      <input type="checkbox" /> <span>Baby & Kids</span>
                    </span>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="suitablefor">
              <span>
                SUITABLE FOR
                <img
                  src={arrow}
                  className={suitablecls}
                  onClick={handsuitable}
                  alt="abc"
                />
              </span>
              <span className="suitable-type">All</span>
              {suitable ? (
                <>
                  <span className="category">Unselect all</span>
                  <div className="catagory-type">
                    <span className="men">
                      <input type="checkbox" />
                      <span> Men</span>
                    </span>

                    <span className="women">
                      <input type="checkbox" /> <span>Women</span>
                    </span>
                    <span className="baby">
                      <input type="checkbox" /> <span>Baby & Kids</span>
                    </span>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="raw">
              <span>
                RAW MATERIALS
                <img
                  src={arrow}
                  className={rawcls}
                  onClick={handrawmeterials}
                  alt="abc"
                />
              </span>
              <span className="raw-type">All</span>
              {rawmaterials ? (
                <>
                  <span className="category">Unselect all</span>
                  <div className="catagory-type">
                    <span className="men">
                      <input type="checkbox" />
                      <span> Men</span>
                    </span>

                    <span className="women">
                      <input type="checkbox" /> <span>Women</span>
                    </span>
                    <span className="baby">
                      <input type="checkbox" /> <span>Baby & Kids</span>
                    </span>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="pattert">
              <span>
                PATTERN
                <img src={arrow} className={patterncls} onClick={handpatern} alt="span" />
              </span>
              <span className="pattern-type">All</span>
              {patern ? (
                <>
                  <span className="category">Unselect all</span>
                  <div className="catagory-type">
                    <span className="men">
                      <input type="checkbox" />
                      <span> Men</span>
                    </span>

                    <span className="women">
                      <input type="checkbox" /> <span>Women</span>
                    </span>
                    <span className="baby">
                      <input type="checkbox" /> <span>Baby & Kids</span>
                    </span>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </aside>
        ) : (
          ""
        )}
        <section className={adjuststyle}>
          {Mockdata.map((val, ind) => (
            <div className="card" key={ind}>
              <img src={val.img} alt={val.name} />
              <span className="title">{val.name}</span>
              <span className="prod-desc">
                <span>{val.desc}</span>{" "}
                <img
                className={`like ${like}`} // Use template literals to conditionally apply the "liked" class
                src={heart}
                alt="Like"
                onClick={handleLikeClick} // Add onClick event handler to call handleLikeClick
              />
              </span>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Products;

