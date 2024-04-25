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
  const [liketoggle, setLiketoggle] = useState(false);
  const mydata = Mock;
  const [Mockdata, setMockData] = useState(mydata);
  const [idealfor, setIdealfor] = useState(false);
  const [rotate, setRotate] = useState("rotate90deg");
  const [occasion, setOccasion] = useState(false);
  const [icocls, setIcocls] = useState("rotate90deg");
  const [work, setWork] = useState(false);
  const [fabric, setFabric] = useState(false);
  const [segment, setsegment] = useState(false);
  const [suitable, setsuitable] = useState(false);
  const [rawmaterials, setrawmaterials] = useState(false);
  const [patern, setpattern] = useState(false);
  const [workcls, setworkcls] = useState("rotate90deg");
  const [fabriccls, setfabriccls] = useState("rotate90deg");
  const [segmentcls, setsegmentcls] = useState("rotate90deg");
  const [suitablecls, setsuitablecls] = useState("rotate90deg");
  const [rawcls, setrawcls] = useState("rotate90deg");
  const [patterncls, setpatterncls] = useState("rotate90deg");
  const [count, setCount] = useState(0);

  // const [lowtohigh, setLowtoHigh] = useState([])
  // const [hightolow, setHightolow] = useState([])

  useEffect(() => {}, [Mockdata]);

  const handleIdeal = () => {
    idealfor ? setIdealfor(false) : setIdealfor(true);
    !idealfor ? setRotate("rotate270deg") : setRotate("rotate90deg");
  };
  const handleOccasion = () => {
    occasion ? setOccasion(false) : setOccasion(true);
    !occasion ? setIcocls("rotate270deg") : setIcocls("rotate90deg");
  };
  const handlework = () => {
    work ? setWork(false) : setWork(true);
    !work ? setworkcls("rotate270deg") : setworkcls("rotate90deg");
  };
  const handfabric = () => {
    fabric ? setFabric(false) : setFabric(true);
    !fabric ? setfabriccls("rotate270deg") : setfabriccls("rotate90deg");
  };
  const handsegment = () => {
    segment ? setsegment(false) : setsegment(true);
    !segment ? setsegmentcls("rotate270deg") : setsegmentcls("rotate90deg");
  };
  const handsuitable = () => {
    suitable ? setsuitable(false) : setsuitable(true);
    !suitable ? setsuitablecls("rotate270deg") : setsuitablecls("rotate90deg");
  };
  const handrawmeterials = () => {
    rawmaterials ? setrawmaterials(false) : setrawmaterials(true);
    !rawmaterials ? setrawcls("rotate270deg") : setrawcls("rotate90deg");
  };
  const handpatern = () => {
    patern ? setpattern(false) : setpattern(true);
    !patern ? setpatterncls("rotate270deg") : setpatterncls("rotate90deg");
  };
  const handlelowtohigh = () => {
    let xy = mydata.sort((a, b) => a.price - b.price);
    setMockData(xy);
    console.log(Mockdata);
    setCount(count + 1);
  };
  const handlehightolow = () => {
    let xy = mydata.sort((a, b) => b.price - a.price);
    setMockData(xy);
    console.log(Mockdata);
    setCount(count + 1);
  };
  const handlerecommended = () => {
    let xy = mydata.sort((a,b)=>{
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if(nameA < nameB) {
        return -1
      }
      if(nameA > nameB){
        return 1
      }
      return 0

    });
    setMockData(xy);
    console.log(Mockdata);
    setCount(count + 1);
  };
  const handlePopular = () => {
    let xy = mydata.sort((a,b)=>{
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if(nameA < nameB) {
        return 1
      }
      if(nameA > nameB){
        return -1
      }
      return 0

    });
    setMockData(xy);
    console.log(Mockdata);
    setCount(count + 1);
  };

  const handleFilterVisibility = () => {
    toggle ? setToggle(false) : setToggle(true);
    !toggle ? setFilter("Hide Filter") : setFilter("Show Filter");
    !toggle ? setAdjustStyle("products width75") : setAdjustStyle("products");
  };
  

  const handleZindex = () => {
    toggle ? setToggle(false) : setToggle(true);
    toggle ? setZind("zind2") : setZind("");
  };
  return (
    <>
      <section className="filter">
        <span className="showfilter">
          <span className="qty">3425 ITEMS</span>
          <span className="hidefilter" onClick={handleFilterVisibility}>
            <span className="ico">
              <img style={{}} src={arrow} alt="arrow" />
            </span>
            <span className="txt">{filter}</span>
          </span>
        </span>
        <span className="filterlogo" onClick={handleZindex}>
          FILTER
        </span>
        <span className="sort">
          <span className="txt">
            <select name="" id="select" onChange={()=>setCount(count + 1)}>
              <option value="Recommended" onClick={handlerecommended}> RECOMMENDED</option>
              <option value="Newest first"> NEWEST FIRST</option>
              <option value="Popular" onClick={handlePopular}> POPULAR</option>
              <option value="hight to low" onClick={handlehightolow}>
                {" "}
                PRICE : HIGH TO LOW
              </option>
              <option value="low to high" onClick={handlelowtohigh}>
                {" "}
                PRICE : LOW TO HIGH
              </option>
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

                <img src={arrow} onClick={handleIdeal} className={rotate} />
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
                <img src={arrow} className={workcls} onClick={handlework} />
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
                <img src={arrow} className={fabriccls} onClick={handfabric} />
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
                <img src={arrow} className={segmentcls} onClick={handsegment} />
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
                <img src={arrow} className={patterncls} onClick={handpatern} />
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
          {console.log(Mockdata)}
          {Mockdata.map((val, ind) => (
            <div className="card" key={ind}>
              <img src={val.img} />
              <span className="title">{val.name}</span>
              <span className="prod-desc">
                <span>{val.desc}</span>{" "}
                <img
                  className={like}
                  src={heart}
                  alt=""
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
