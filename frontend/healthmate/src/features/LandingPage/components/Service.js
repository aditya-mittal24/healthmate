import React from 'react'
import pic1 from "./../../../assets/card1.jpg"
import pic2 from "./../../../assets/card2.jpg"
import pic3 from "./../../../assets/card3.jpg"
import pic4 from "./../../../assets/card4.jpg"

const Service = () => {
  return (
<services id="service">

<div class="text-6xl mt-8 mb-8 font-semibold text-center font-sans">Our Services
        </div>

        <hr class="w-1/2 mx-auto bg-red-50 h-0.5"/>


        <div class="grid grid-cols-1
         lg:grid-cols-4 lg:gap-1 justify-items-center mt-5 px-10 pb-16">

            <div class="py-9">
                <div class="rounded overflow-hidden shadow-xl shadow-red-200 hover:shadow-red-500 max-w-xs">
                    <img src={pic1} alt="mountain" class="w-full"/>
                    <hr class="w-2/3 mx-auto "/>
                    <div class="px-6 py-4">
                        <div class=" font-bold text-lg mb-2  ">
                            <h1 class="text-center">Diabetes Prediction</h1>
                        </div>
                        <p>Our Diabetes Prediction tool is here to help you gain insights into your health. With just a few simple inputs, you can get an initial assessment of your diabetes risk. It should effectively convey the value of the diabetes prediction feature and encourage users to utilize it for their health benefit.</p>
                    </div>

                </div>
            </div>

            <div class="py-9">
                <div class="rounded overflow-hidden shadow-xl shadow-red-200 hover:shadow-red-500 max-w-xs">
                    <img src={pic2}  alt="mountain" class="w-full"/>
                    <div class="px-6 py-4">
                        <div class=" font-bold text-lg mb-2  ">
                            <h1 class="text-center">Hypertension Prediction</h1>
                        </div>
                        <p>Our Hypertension Prediction tool understanding your blood pressure and overall health is essential for a long and healthy life. Take the first step toward proactive health management with our easy-to-use prediction tool.The goal is to clearly communicate the value of the hypertension prediction feature.</p>
                    </div>
                </div>
            </div>

            <div class="py-9">
                <div class="rounded overflow-hidden shadow-xl shadow-red-200 hover:shadow-red-500 max-w-xs">
                    <img src={pic3}  alt="mountain" class="w-full"/>
                    <div class="px-6 py-4">
                        <div class=" font-bold text-lg mb-2">
                            <h1 class="text-center">General Health Analysis</h1>
                        </div>
                        <p>Gain a comprehensive view of your health. Input vital data like age, gender, and lifestyle choices for personalized insights on your general well-being. Empower your health journey now! Explore your holistic health profile with our General Health Analysis tool. Discover how factors like age, gender impact your well-being.</p>
                    </div>
                </div>
            </div>
            <div class="py-9">
                <div class="rounded overflow-hidden shadow-xl shadow-red-200 max-w-xs hover:shadow-red-500">
                    <img src={pic4}  alt="mountain" class="w-full"/>
                    <div class="px-6 py-4">
                        <div class=" font-bold text-lg mb-2  ">
                            <h1 class="text-center">Health Data Management</h1>
                        </div>
                        <p>Effortlessly manage your health data with our Health Analysis tool. Store and track vital information securely. Uncover trends, make informed decisions, and prioritize your well-being. Your health, your control. Utilize our Health Analysis tool to stay proactive about your health and make meaningful strides toward a healthier and happier life.</p>
                    </div>
                </div>
            </div>
        </div>



</services>
  )
}

export default Service