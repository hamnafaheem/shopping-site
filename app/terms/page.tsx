import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col  bg-blue-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-blue-100">
        <h1 className="text-4xl font-bold text-center mb-8 gradient-text">Terms of Service</h1>
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700">
              Welcome to Our Shopping Site. These terms and conditions outline the rules and regulations for the use of our website.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-700">
              Other than the content you own, under these Terms, Our Shopping Site and/or its licensors own all the intellectual property rights and materials contained in this Website.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Restrictions</h2>
            <p className="text-gray-700">
              You are specifically restricted from all of the following:
              <ul className="list-disc list-inside ml-4">
                <li>publishing any Website material in any other media;</li>
                <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                <li>publicly performing and/or showing any Website material;</li>
                <li>using this Website in any way that is or may be damaging to this Website;</li>
                <li>using this Website in any way that impacts user access to this Website;</li>
                <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
                <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
                <li>using this Website to engage in any advertising or marketing.</li>
              </ul>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Privacy</h2>
            <p className="text-gray-700">
              Please read our Privacy Policy.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">No warranties</h2>
            <p className="text-gray-700">
              This Website is provided "as is," with all faults, and Our Shopping Site express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of liability</h2>
            <p className="text-gray-700">
              In no event shall Our Shopping Site, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Our Shopping Site, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="text-gray-700">
              You hereby indemnify to the fullest extent Our Shopping Site from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Variation of Terms</h2>
            <p className="text-gray-700">
              Our Shopping Site is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Assignment</h2>
            <p className="text-gray-700">
              The Our Shopping Site is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Entire Agreement</h2>
            <p className="text-gray-700">
              These Terms constitute the entire agreement between Our Shopping Site and you in relation to your use of this Website, and supersede all prior agreements and understandings.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
