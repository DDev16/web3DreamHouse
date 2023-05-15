import Link from "next/link";

const TermsConditions = () => {
  const termsContent = [
    {
      id: 1,
      title: "Terms and Conditions",
      text1: `These Terms and Conditions ("Agreement") govern the use of the web3 real estate decentralized application ("DApp") and the associated non-fungible tokens ("NFTs") used to facilitate transactions. By accessing or using the DApp and NFTs, you agree to comply with this Agreement. If you do not agree with any part of this Agreement, you must refrain from accessing or using the DApp and NFTs.`,
      text2: `User Responsibilities
      1.1. You must be at least 18 years old or have reached the age of majority in your jurisdiction to use the DApp and NFTs. By using the DApp and NFTs, you represent and warrant that you meet the age requirements.

      1.2. You are solely responsible for maintaining the security and confidentiality of your account credentials, including private keys, passwords, and any other authentication information. You agree to notify us immediately of any unauthorized use of your account.

      1.3. You acknowledge that all transactions conducted through the DApp and NFTs are irreversible. You are responsible for conducting appropriate due diligence before participating in any transaction and bear all risks associated with such transactions.

      1.4. You agree not to use the DApp and NFTs for any illegal or unauthorized purposes. You must comply with all applicable laws and regulations while using the DApp and NFTs.`,
    },
    {
      id: 2,
      title: "Ownership and Intellectual Property",
      text1: `Ownership and Intellectual Property
      2.1. The NFTs associated with the DApp represent ownership or access rights to both physical and virtual real estate properties. The ownership of NFTs implies real-world property rights to the extent specified by the owners and governed by applicable laws.

      2.2. All intellectual property rights related to the DApp and NFTs, including but not limited to trademarks, copyrights, and trade secrets, are owned by the respective owners. You are granted a limited, non-exclusive, non-transferable right to use the DApp and NFTs solely for personal, non-commercial purposes.

      2.3. You agree not to reproduce, modify, distribute, sell, lease, or exploit any part of the DApp and NFTs without the explicit written consent of the owners.`,
    },
    {
      id: 3,
      title: "Transactions and Disputes",
      text1: `Transactions and Disputes
       3.1. The DApp facilitates peer-to-peer transactions between users. All transactions are executed directly between the buyer and seller, and the DApp acts as a platform for facilitating these transactions.

       3.2. The DApp does not guarantee the accuracy, completeness, or legality of any property information provided by users. You acknowledge and agree that any reliance on such information is at your own risk.

       3.3. In the event of a dispute between users regarding a transaction, the users involved are solely responsible for resolving the dispute. The DApp and its owners are not liable for any losses, damages, or disputes arising from transactions conducted through the DApp and NFTs.`,
    },
    {
      id: 4,
      title: "Privacy and Data Protection",
      text1: `Privacy and Data Protection
       4.1. The DApp collects and processes personal data in accordance with applicable privacy laws and regulations. Please refer to our Privacy Policy for
detailed information on how we collect, use, and protect your personal data., }, { id: 5, title: "Limitation of Liability", text1: Limitation of Liability
5.1. To the maximum extent permitted by applicable law, the DApp and its owners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the DApp and NFTs., }, { id: 6, title: "Amendments and Termination", text1: Amendments and Termination
6.1. We reserve the right to modify, suspend, or terminate the DApp and NFTs at any time without prior notice.
6.2. We may update or revise this Agreement from time to time. The updated version will be effective upon posting on the DApp or by other means of notification. Your continued use of the DApp and NFTs after the changes have been made constitutes your acceptance of the modified Agreement.`,
},
{
  id: 7,
  title: "Indemnification",
  text1: `Indemnification
  7.1. You agree to indemnify, defend, and hold harmless the DApp and its owners, including their directors, officers, employees, and affiliates, from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or in connection with your use of the DApp and NFTs, violation of any provision of this Agreement, or infringement of any rights of third parties.`,
},
{
  id: 8,
  title: "Governing Law and Jurisdiction",
  text1: `Governing Law and Jurisdiction
  8.1. This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts located in [Jurisdiction].`,
},
{
  id: 9,
  title: "Entire Agreement",
  text1: `Entire Agreement
  9.1. This Agreement constitutes the entire agreement between you and the DApp regarding the use of the DApp and NFTs and supersedes all prior agreements and understandings, whether written or oral.`,
},
{
  id: 10,
  title: "Severability",
  text1: `Severability
  10.1. If any provision of this Agreement is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect to the maximum extent permitted by law.`,
},
];

  const navigationList = [
    { id: 1, routeLink: "#", name: "Welcome Text" },
    { id: 2, routeLink: "#", name: "Our Terms" },
    { id: 3, routeLink: "#", name: "Conditions" },
    { id: 4, routeLink: "#", name: "Your Privacy" },
    { id: 5, routeLink: "#", name: "Informations We Collect" },
  ];

  return (
    <div className="row">
      <div className="col-lg-8 col-xl-8">
        <div className="terms_condition_grid">
          {termsContent.map((item) => (
            <div className="grids mb30" key={item.id}>
              <h4>{item.title}</h4>
              <p className="mb20">{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="terms_condition_widget">
          <h4 className="title">Navigation</h4>
          <div className="widget_list">
            <ul className="list_details">
              {navigationList.map((list) => (
                <li key={list.id}>
                  <Link href={list.routeLink}>
                    <a>
                      <i className="fa fa-caret-right mr10"></i>
                      {list.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
