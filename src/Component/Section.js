import React from 'react';
import './Section.css'

export default function Section() {
  return <div>
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
      <div className="container">
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./img1.png" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./img2.png" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
      </div>
      <div className="welcome-msg">
        <div className="flexbox text-color">       
          <div>
            <h2 className="welcomeTitle">Feed the poor Through NFTs, Community, and Art!</h2>
            <p>A community dedicated to using NFTs, art, and cutting-edge tech to raise money for feeding the poor and killing the hunger.</p>
            <p>If you're an potato lover, artist, entrepreneur, or creator, we'd love to have you in our mutant farm. All it takes is to buy our NFTs or <a href="https://discord.com/invite/">join our Discord</a> and say hi.</p>
            <p>If you're not familiar with NFTs, we'd love to be your first one and are happy to help you get started.</p>
          </div>
        </div>
      </div>
      <div className="container" id="scrollspyCollection">
        <div className="collection-box">
        <div className="flexbox text-color">       
          <div>
            <h2 className="welcomeTitle">WELCOME TO THE MUTANT POTATO CLUB</h2>
            <p>MPC is a collection of 10,000 Mutated Potato NFTs—unique digital collectibles mutating on the Ethereum blockchain.</p>
            <p>Your Mutant Potato mutates, and grants access to members-only benefits, the first of which is access to THE MUTANT KITCHEN, a collaborative graffiti board.</p>
            <p>Future areas and perks can be unlocked by the community through roadmap activation.</p>
          </div>
        </div>
          {/* <div className="left-collections">
            <div className="collection-grid1">
              <div className="collection-item">
                <img data-src="./collectionimg1.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg1.png"/>
              </div>
              <div className="collection-item">
                <img data-src="./collectionimg2.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg2.png"/>
              </div>
              <div className="collection-item">
                <img data-src="./collectionimg3.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg3.png"/>
              </div>
              <div className="collection-item">
                <img data-src="./collectionimg4.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg4.png"/>
              </div>
              <div id="w-node-_670beaaa-da4a-0870-8c63-623cc40bf2d4-b290a2aa" className="collection-item">
                <img data-src="./collectionimg1.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg1.png"/>
              </div>
              <div id="w-node-a67567a3-4140-c796-eb5b-be980eaae6ba-b290a2aa" className="collection-item">
                <img data-src="./collectionimg2.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg2.png"/>
              </div>
              <div id="w-node-_66bf9a24-3e7b-c300-2fcf-1e84dc48595c-b290a2aa" className="collection-item">
                <img data-src="./collectionimg3.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg3.png"/>
              </div>
              <div id="w-node-_68d20d49-9e88-7b20-65ef-c1f3d316580e-b290a2aa">
                <a className="collection-button" href="https://opensea.io/collection/mutantpotato">
                  <div className="collection-button-wrapper">
                    <div className="buttonTitle">OpenSea</div>
                    <div className="buttonText">Mutant Collection</div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
      <div className="right-collections">
        <div className="collection-grid2">
          <div className="collection-item">
            <img data-src="./collectionimg1.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg1.png"/>
          </div>
          <div className="collection-item">
            <img data-src="./collectionimg2.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg2.png"/>
          </div>
          <div className="collection-item">
            <img data-src="./collectionimg3.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg3.png"/>
          </div>
          <div className="collection-item">
            <img data-src="./collectionimg4.png" alt="" className="full-image lazy entered loaded" data-ll-status="loaded" src="./collectionimg4.png"/>
          </div>
        </div>
      </div>
      </div>
      </div>
      <h4 className="my-3 text-color" id="scrollspyWhyPotato">Why Potato</h4>
      <p></p>
      <h4 className="my-3 text-color"  id="scrollspyRoadmap">Roadmap</h4>
      <p></p>
      <h4 className="my-3 text-color"  id="scrollspyTeam">Team</h4>
      <p></p>
      
    </div>
  </div>;
}
