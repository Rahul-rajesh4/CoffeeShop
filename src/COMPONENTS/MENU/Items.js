import React, { useEffect } from 'react'
import a from './imges/Cappuccino.jpg'
import b from './imges/Caramel_Macchiato.jpg'
import c from './imges/Chocolate_Cortado.jpg'
import d from './imges/Caffe_Americano.jpg'
import e from './imges/cold.jpg'
import f from './imges/Iced_Roasted_Nut_Latte.jpg'
import g from './imges/egg.jpg'
import h from './imges/egg2.jpg'
import ii from './imges/fd.jpg'
import j from './imges/fd2.jpg'
import k from './imges/sh.jpg'
import l from './imges/sh2.jpg'
import pack from'./imges/pack.jpg'
import pack2 from'./imges/pack2.jpg'
import Aos from 'aos'


import './item.css'
export default function Items() {


    useEffect(() => {

        Aos.init();
    }, [])
    return (
        <>
            <div className='itemss' >
                <div>
                    <h2 className='drinkss' >Drinks</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={a} class="img-fluid rounded-start" ></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Cappuccino</h5>
                                        <p class="card-text">Dark, Rich in flavour espresso lies in wait under a smoothed and stretched layer of thick foam.</p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 283.50</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3 menucarddheight" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={b} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Caramel Macchiato</h5>
                                        <p class="card-text">Freshly steamed milk with vanilla-flavored syrup is marked with espresso and topped with caramel drizzle.</p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 351.75</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={c} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Chocolate Cortado</h5>
                                        <p class="card-text">A perfect espresso shot and mocha sauce, topped with steamed milk.</p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 341.25</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={d} class="img-fluid rounded-start " alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Caffe Americano</h5>
                                        <p class="card-text">Rich in flavour, full-bodied espresso with hot water in true European style.</p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 262.50</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={e} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">White Chocolate Mocha</h5>
                                        <p class="card-text">Our signature espresso meets white chocolate sauce and steamed milk, then is finished off with sweetened whipped creamj.</p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 330.75</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={f} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Iced Roasted Nut Latte</h5>
                                        <p class="card-text">A perfect blend of Milk, Espresso and Cashew Nut Sauce finished with Whipped Cream and Pistachio Chunks.</p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 456.75</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* food */}
                <div>
                    <h2 className='drinkss'>Food</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={j} class="img-fluid rounded-start " ></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Egg Wrap</h5>
                                        <p class="card-text">Smoked chicken sausages and scrambled egg encased in a whole wheat and millet wrap.</p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 153.50</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3 menucarddheight" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={ii} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Rolled Oatmeal</h5>
                                        <p class="card-text">A blend of rolled and whole-grain steel-cut oats,dried fruit, nut medley, brown sugar, agave or blueberries.
                                            </p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 281.75</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={h} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Egg Sandwich</h5>
                                        <p class="card-text">Bacon smoked for six hours over hickory wood chips, stacked with a cage-free fried egg,.
                                            </p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 241.25</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={g} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Impossible Sandwich</h5>
                                        <p class="card-text">The savory Impossible™ Sausage Made from Plants combined with a cage-free fried egg.
                                            </p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 252.50</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={k} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Egg Bites</h5>
                                        <p class="card-text">Chopped kale and portabella mushrooms delicately folded into cage-free eggs.
                                            </p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 130.75</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={l} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Bacon, Gouda & Egg </h5>
                                        <p class="card-text">Sizzling applewood-smoked bacon, Parmesan cage-free egg frittata and melted aged Gouda on an artisan roll.</p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 256.75</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* product */}
                <div>
                    <h2 className='drinkss'>Products</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card mb-3" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={pack} class="img-fluid rounded-start " ></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Diwali Blend</h5>
                                        <p class="card-text">Celebrate this Diwali in the best way we know how-with coffee.</p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 1153.50</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3 menucarddheight" data-aos="fade-right" data-aos-delay=".1s">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={pack2} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Anniversay Blend</h5>
                                        <p class="card-text">Full bodied, Robust and undeniably bold, this coffee is the testament to Past and the future.
                                            </p>
                                        <p class="card-text"><small class="text-body-secondary">₹ 1281.75</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
