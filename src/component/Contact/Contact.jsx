const Contact = () =>{
    return(
        <section className="py-20 bg-[#F5F5F5]">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-serif font-bold text-[#0A2647] mb-4">Get In Touch</h2>
<p className="text-lg text-gray-600 max-w-3xl mx-auto">
Have questions or ready to elevate your financial strategy? Reach out to our team of experts today.
</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="bg-white p-8 rounded-lg shadow-lg">
<h3 className="text-2xl font-serif font-bold text-[#0A2647] mb-6">Send Us a Message</h3>
<form>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
<input
type="text"
id="name"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent"
placeholder="John Doe"
/>
</div>
<div>
<label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
<input
type="email"
id="email"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent"
placeholder="john@example.com"
/>
</div>
</div>
<div className="mb-6">
<label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
<input
type="text"
id="subject"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent"
placeholder="How can we help you?"
/>
</div>
<div className="mb-6">
<label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
<textarea
id="message"
rows={5}
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent"
placeholder="Your message here..."
></textarea>
</div>
<button
type="submit"
className="bg-[#0A2647] text-white px-8 py-3 rounded-button hover:bg-[#0a3060] transition-colors duration-300 shadow-md text-lg font-medium whitespace-nowrap cursor-pointer"
>
Send Message
</button>
</form>
</div>
<div>
<div className="bg-white p-8 rounded-lg shadow-lg mb-8">
<h3 className="text-2xl font-serif font-bold text-[#0A2647] mb-6">Contact Information</h3>
<div className="space-y-6">
<div className="flex items-start">
<div className="text-[#C5A572] text-xl mr-4 mt-1">
<i className="fas fa-map-marker-alt"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Office Address</h4>
<p className="text-gray-600">
Km 3, Fajol, Obantoko, Abeokuta–Ibadan Road, Abeokuta-Ibadan Expressway, Abeokuta South, Ogun, Nigeria
</p>
</div>
</div>
<div className="flex items-start">
<div className="text-[#C5A572] text-xl mr-4 mt-1">
<i className="fas fa-envelope"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Email</h4>
<p className="text-gray-600 flex items-center">
olujunaidandco@gmail.com
<button className="ml-2 text-[#0A2647] hover:text-[#C5A572] cursor-pointer" title="Copy to clipboard">
<i className="far fa-copy"></i>
</button>
</p>
</div>
</div>
<div className="flex items-start">
<div className="text-[#C5A572] text-xl mr-4 mt-1">
<i className="fas fa-phone-alt"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Phone</h4>
<p className="text-gray-600">+234 123 456 7890</p>
</div>
</div>
<div className="flex items-start">
<div className="text-[#C5A572] text-xl mr-4 mt-1">
<i className="fas fa-clock"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Office Hours</h4>
<p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
<p className="text-gray-600">Saturday - Sunday: Closed</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-lg shadow-lg">
<h3 className="text-2xl font-serif font-bold text-[#0A2647] mb-6">Connect With Us</h3>
<div className="flex space-x-4">
<a href="#" className="w-10 h-10 rounded-full bg-[#0A2647] flex items-center justify-center text-white hover:bg-[#C5A572] transition-colors duration-300 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-[#0A2647] flex items-center justify-center text-white hover:bg-[#C5A572] transition-colors duration-300 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-[#0A2647] flex items-center justify-center text-white hover:bg-[#C5A572] transition-colors duration-300 cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-[#0A2647] flex items-center justify-center text-white hover:bg-[#C5A572] transition-colors duration-300 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
    )
}
export default Contact