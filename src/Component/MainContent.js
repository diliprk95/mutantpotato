import React from 'react';
import './MainContent.css'

const MainContent =() => {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar"
      data-bs-offset="0"
      className="scrollspy-example"
      tabIndex="0"
    >
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./collectionimg1.png" className="d-height" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./collectionimg2.png" className="d-height" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span
            className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div className="Welcome-img">
            <img src="./collectionimg1.png" alt="" />
        </div> */}
      {/* <div className="card">
          <div className="card-body">
          <img src="./sisitelogo.png" alt="" />
          </div>
        </div> */}

      <div className="margin-top-bottom">
        <div className="text-color">
          <div>
            <h2 className="welcomeTitle">
              Feed the poor Through NFTs, Community, and Art!
            </h2>
            <p>
              A community dedicated to using NFTs, art, and cutting-edge tech to
              raise money for feeding the poor and killing the hunger.
            </p>
            <p>
              If you're an potato lover, artist, entrepreneur, or creator, we'd
              love to have you in our mutant farm. All it takes is to buy our
              NFTs or <a href="https://discord.com/invite/">join our Discord</a>{" "}
              and say hi.
            </p>
            <p>
              If you're not familiar with NFTs, we'd love to be your first one
              and are happy to help you get started.
            </p>
          </div>
        </div>
      </div>


      <div className="collection-box" id="scrollspyCollection">
        <div className="welcomewidth text-color">
          <div>
            <h2 className="welcomeTitle">WELCOME TO THE MUTANT POTATO CLUB</h2>
            <p>
              MPC is a collection of 10,000 Mutated Potato NFTs—unique digital
              collectibles mutating on the Ethereum blockchain.
            </p>
            <p>
              Your Mutant Potato mutates, and grants access to members-only
              benefits, the first of which is access to THE MUTANT KITCHEN, a
              collaborative graffiti board.
            </p>
            <p>
              Future areas and perks can be unlocked by the community through
              roadmap activation.
            </p>
          </div>
        </div>
        <div className="right-collections">
          <div className="collection-grid2">
            <div className="collection-item">
              <img
                data-src="./collectionimg1.png" alt="" className="full-image lazy entered loaded imgborder" data-ll-status="loaded" src="./collectionimg1.png"
              />
            </div>
            <div className="collection-item">
              <img
                data-src="./collectionimg2.png" alt="" className="full-image lazy entered loaded imgborder" data-ll-status="loaded" src="./collectionimg2.png"
              />
            </div>
            <div className="collection-item">
              <img
                data-src="./collectionimg3.png" alt="" className="full-image lazy entered loaded imgborder" data-ll-status="loaded" src="./collectionimg3.png"
              />
            </div>
            <div className="collection-item">
              <img
                data-src="./collectionimg4.png" alt="" className="full-image lazy entered loaded imgborder" data-ll-status="loaded" src="./collectionimg4.png"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="col-width margin-top-bottom">
        <div className="buy-token-container">
          <div className="mpbtn-bg p-4 m-auto row">
            <div className="m-auto col-lg-3 col-12">
              <h3 className="buy-title">BUY A MUTANT</h3>
            </div>
            <div className="m-auto col-lg-4 col-12 offset-lg-1">
              <p className="common-p mb-lg-0">
                To get your Mutant Potato, check out the collection on OpenSea.
              </p>
            </div>
            <div className="m-auto col-lg-3 col-12 offset-lg-1">
              <a href="https://opensea.io/collection/mutantpotato">
                <button className="mp-button mint" type="button">
                  BUY AN MUTANT ON OPENSEA
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container whywidth" id="scrollspyWhyPotato">
        <h4 className="my-3 text-color">Why Potato</h4>
        <div className="text-color">
          <div>
            <h2 className="welcomeTitle">Potatoes are everyone's favourite</h2>
            <p>
              Mutant Potato is a creation fascinated by the mutant potato news
              from Caen in France. During the Covid-19 Lockdown, Potatoes took
              over a French Woman's house while she was away.
            </p>
            <p>
              This project was created as a source of inspiration for cooking
              some mutated potatoes in our metaverse.
            </p>
            <p>
              Our project's major goal will be to feed underprivileged children
              and end hunger in our actual world by cooking some mutant potatoes
              in the metaverse.
            </p>
            <p>
              So, if you're here to mash some mutant potatoes, you've come to
              the right place. Mash them all together with your mashers.
            </p>
            <p>
              All it takes is to buy our NFTs or{" "}
              <a href="https://discord.com/invite/">join our Discord</a> and say
              hi.
            </p>
          </div>
        </div>
      </div>

      <div className="roadmap margin-top-bottom">
        <div className="row roadmapdiv">
          <div className="mb-3 col-lg-9 col-12">
            <h2 className="mb-3">ROADMAP</h2>
            <p className="common-p">Mash as much as you can so we can kill hunger together.</p>
            <p className="common-p">
            We've put in place certain targets for ourselves.
            We will begin working on achieving the stated target once we have managed to reach a specific sell through percentage.
            </p>
          </div>
          <div className="mb-3 mb-md-0 col-lg-8 col-12">
            <div className="mb-3 mb-lg-1 row">
              <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                <p className="goal">10%</p>
              </div>
              <div className="m-auto col-lg-10 col-9">
                <p className="common-sub-p">
                  We pay back our family.
                </p>
              </div>
            </div>
            <div className="mb-3 mb-lg-1 row">
              <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                <p className="goal">20%</p>
              </div>
              <div className="m-auto col-lg-10 col-9">
                <p className="common-sub-p">
                  We create the 3D model of the Mutant Potato and each Mutant holder by then will be airdroped with a surprised 3D Mutant.
                </p>
              </div>
            </div>
            <div className="mb-3 mb-lg-1 row">
              <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                <p className="goal">40%</p>
              </div>
              <div className="m-auto col-lg-10 col-9">
                <p className="common-sub-p">
                  MPC gets its own YouTube channel and start a funny animation series on Mutant Potato.
                </p>
              </div>
            </div>
            <div className="mb-3 mb-lg-1 row">
              <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                <p className="goal">60%</p>
              </div>
              <div className="m-auto col-lg-10 col-9">
                <p className="common-sub-p">
                  MPC Merch Store gets unlocked, featuring
                  Limited Edition tees, hoodies, and other goodies.
                </p>
              </div>
            </div>
            <div className="mb-3 mb-lg-1 row">
              <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                <p className="goal">80%</p>
              </div>
              <div className="m-auto col-lg-10 col-9">
                <p className="common-sub-p">
                Donate a handsome amount to help feed disadvantaged children and end hunger. Updating every aspect on our channel.
                </p>
              </div>
            </div>
            <div className="mb-3 mb-lg-1 row">
              <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                <p className="goal">90%</p>
              </div>
              <div className="m-auto col-lg-10 col-9">
                <p className="common-sub-p">
                  demo
                </p>
              </div>
            </div>
            <div className="row">
              <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                <p className="goal">100%</p>
              </div>
              <div className="m-auto col-lg-10 col-9">
                <p className="common-sub-p">
                  Demo
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mx-auto mb-5 my-lg-auto col-lg-3 col-12 offset-lg-1">
            <img
              className="mask"
              src="./sitelogosm.png"
              alt="shirt"
            />
          </div> */}
        </div>
      </div>

      <div className="collection-box" id="scrollspyTeam">
        <div className="welcomewidth text-color">
          <div>
            <h2 className="welcomeTitle">Team</h2>
            <p>
              MPC was created by two buddies who wanted to try out their skills and make some witty art after being fascinated by the potato mutant news.
            </p>
            <p>
              Name2
            </p>
            <p>
              Name1
            </p>
          </div>
        </div>
        <div className="right-collections">
          <div className="collection-grid2">
            <div className="collection-item">
              <img
                data-src="./collectionimg1.png" alt="" className="full-image lazy entered loaded imgborder" data-ll-status="loaded" src="./collectionimg1.png"
              />
            </div>
            <div className="collection-item">
              <img
                data-src="./collectionimg2.png" alt="" className="full-image lazy entered loaded imgborder" data-ll-status="loaded" src="./collectionimg2.png"
              />
            </div>
            <div className="collection-item">
              <img
                data-src="./collectionimg3.png" alt="" className="full-image lazy entered loaded imgborder" data-ll-status="loaded" src="./collectionimg3.png"
              />
            </div>
            <div className="collection-item">
              <img
                data-src="./collectionimg4.png" alt="" className="full-image lazy entered loaded imgborder" data-ll-status="loaded" src="./collectionimg4.png"
              />
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default MainContent