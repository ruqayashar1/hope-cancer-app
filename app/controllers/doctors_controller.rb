class DoctorsController < ApplicationController

  def all_appointments
    doctor = Doctor.find_by(name: params[:doctor])
    appointments = doctor.appointments.map do |appointment|
      {
        cancer: appointment.cancer,
        severity: appointment.severity,
        appointment_date: appointment.appointment_date,
        appointment_time: appointment.appointment_time,
        hospital: appointment.hospital,
        patient: appointment.patient.name
      }
    end
    render json: appointments
  end
    

    def create
    
        admin = Doctor.find_by(name: params[:name])
        if admin&.authenticate(params[:password])
          # session[:doctor_id] = doctor.id
          render json: admin, status: :created
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
        
    end
end
