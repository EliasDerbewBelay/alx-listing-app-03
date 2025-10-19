const CancellationPolicy = () => (
  <div className="bg-white p-6 shadow-md rounded-lg mt-6">
    <h2 className="text-xl font-semibold">Cancellation Policy</h2>
    <p className="mt-2 text-gray-600">
      ✅ Free cancellation before <span className="font-medium">Aug 23</span>.
      Cancel before check-in on <span className="font-medium">Aug 24</span> for
      a partial refund.
    </p>

    <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
    <ul className="mt-2 text-gray-600 list-disc list-inside">
      <li>Follow the house rules</li>
      <li>Treat your host’s home like your own</li>
      <li>No loud noise after 10 PM</li>
      <li>No smoking indoors</li>
    </ul>
  </div>
);

export default CancellationPolicy;
