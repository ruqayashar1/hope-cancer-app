class AppointmentsController < ApplicationController
    def create
        patient = Patient.find_by(name: params[:patient])
    #    puts patient.id
        doctor = Doctor.find_by(name: params[:doctor])
    #    puts doctor.id

        appointment = Appointment.create(
            doctor_id: doctor.id,
            patient_id: patient.id,
            cancer: params[:cancer],
            severity: params[:severity],
            appointment_date: params[:appointment_date],
            appointment_time: params[:appointment_time],
            hospital: params[:hospital]
        )

        if appointment.valid?
            #session[:user_id] = user.id
            render json: appointment, status: :created
        else
            render json: { errors: appointment.errors.full_messages }, status: :unprocessable_entity
        end
    end
end
