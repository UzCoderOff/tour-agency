import React, { useState, useRef } from "react";
import { useLanguage } from "../LanguageContext";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Card } from "primereact/card";
import { Loader2 } from "lucide-react";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Form = () => {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    numberOfGuests: "",
    checkInDate: null,
    destination: "",
    visaSupport: "",
  });

  const [loading, setLoading] = useState(false);
  const toast = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = "7337555984:AAHR21u09zamBEBa6aYI1Q3ZZp6oQdXsGtM";
      const id = 6236437496;
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${JSON.stringify(
        formData
      )}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      toast.current.show({
        severity: "success",
        summary: translations.form.success,
        life: 3000,
      });

      setFormData({
        name: "",
        phoneNumber: "",
        numberOfGuests: "",
        checkInDate: null,
        destination: "",
        visaSupport: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.current.show({
        severity: "error",
        summary: translations.form.error,
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const guestsOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4+", value: "4+" },
  ];

  return (
    <div className="w-full flex justify-center items-center min-h-[600px] bg-gray-100">
      <Card className="w-full max-w-6xl p-10 space-y-8 shadow-lg">
        <h2 className="text-4xl font-bold text-center text-primary py-5">
          {translations.forum.formTitle}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-float-label">
              <InputText
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
              <label htmlFor="name">
                {translations.forum.fields.name.label}
              </label>
            </div>
            <div className="p-float-label">
              <InputText
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full"
              />
              <label htmlFor="phoneNumber">
                {translations.forum.fields.phoneNumber.label}
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.forum.fields.numberOfGuests.label}
              </label>
              <Dropdown
                value={formData.numberOfGuests}
                options={guestsOptions}
                onChange={handleSelectChange}
                name="numberOfGuests"
                placeholder={
                  translations.forum.fields.numberOfGuests.placeholder
                }
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.forum.fields.checkInDate.label}
              </label>
              <Calendar
                value={formData.checkInDate}
                onChange={(e) =>
                  handleChange({
                    target: { name: "checkInDate", value: e.value },
                  })
                }
                name="checkInDate"
                dateFormat="mm/dd/yy"
                placeholder="mm/dd/yyyy"
                className="w-full"
                showIcon
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.forum.fields.destination.label}
              </label>
              <Dropdown
                value={formData.destination}
                options={translations.forum.fields.destination.options.map(
                  (option) => ({
                    label: option,
                    value: option,
                  })
                )}
                onChange={handleSelectChange}
                name="destination"
                placeholder="Select Destination"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.forum.fields.visaSupport.label}
              </label>
              <Dropdown
                value={formData.visaSupport}
                options={translations.forum.fields.visaSupport.options.map(
                  (option) => ({
                    label: option,
                    value: option,
                  })
                )}
                onChange={handleSelectChange}
                name="visaSupport"
                placeholder="Visa Support"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full w-full md:w-2/3 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {loading ? "Submitting..." : translations.forum.submitButton}
            </Button>
          </div>
        </form>
        <Toast ref={toast} />
      </Card>
    </div>
  );
};

export default Form;
